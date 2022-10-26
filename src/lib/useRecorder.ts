import { useState } from 'react';
import { Audio } from 'expo-av';
import { uploadFile } from 'services/s3';
import { addRecording } from 'services/storage';

interface UseRecorderHook {
  isRecording: boolean;
  onPress: () => Promise<void>;
  isUploading: boolean;
  reset: () => void;
  saveRecording: () => Promise<void>;
  recordingUri: string | null;
}

export const useRecorder = (): UseRecorderHook => {
  const [recordingObject, setRecordingObject] = useState(null); // This is set when the recording is in progress.
  const [recordingUri, setRecordingUri] = useState(null); // When the recording is complete, this is set to the URI of the recording on the local drive.
  const [isUploading, setIsUploading] = useState(false);

  const onPress = async (): Promise<void> => {
    await Audio.requestPermissionsAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });

    if (!recordingObject) {
      const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      setRecordingObject(recording);
    } else {
      await recordingObject.stopAndUnloadAsync();
      const uri = recordingObject.getURI();
      setRecordingObject(null);
      setRecordingUri(uri);
    }
  };

  const reset = (): void => {
    setRecordingUri(null);
    setRecordingObject(null);
  };

  const saveRecording = async (): Promise<void> => {
    try {
      setIsUploading(true);
      const { url, filename } = await uploadFile(recordingUri); // Upload the recording to S3.
      addRecording({ filename, url }); // Add the recording to local storage
      setIsUploading(false);
      reset();
    } catch (e) {
      console.log(e.response);
      console.log(e.message);
      setIsUploading(false);
    }
  };

  const isRecording = !!recordingObject;

  return {
    isUploading,
    onPress,
    isRecording,
    reset,
    saveRecording,
    recordingUri,
  };
};
