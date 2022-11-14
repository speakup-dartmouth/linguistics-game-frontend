import { useState, useEffect } from 'react';
import { Audio, AVPlaybackStatus } from 'expo-av';
import { uploadFile } from 'services/s3';
import { isAVPlaybackStatusSuccess } from 'types/guards';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useAddAnswerMutation } from 'services/api';
import { addCurrentlyPlayingSound, removeCurrentlyPlayingSound } from 'redux/slices/questionSlice';

interface UseRecorderHook {
  isRecording: boolean;
  startStopRecording: () => Promise<void>;
  isUploading: boolean;
  reset: () => void;
  saveRecording: (questionId: string, stance: string) => Promise<void>;
  recordingUri: string | null;
}

interface UsePlaybackHook {
  isPlaying: boolean;
  startStopPlayback: () => void;
  isLoaded: boolean;
  duration: string;
  progress: string;
  setRecordingUri: (uri: string) => void;
  startPlayback: () => void;
  stopPlayback: () => void;
  recordingUri: string | null;
  isBuffering: boolean;
}

// Get mm:ss from seconds
function formatTime(seconds: number): string {
  if (Number.isNaN(seconds)) { return '0'; }

  const hours = Math.floor(seconds / 3600);
  const remainder = seconds % 3600;
  const mmss = new Date(remainder * 1000).toISOString().slice(14, 19);
  return hours > 0 ? `${hours}:${mmss}` : mmss;
}

export const useRecorder = (): UseRecorderHook => {
  const { id } = useAppSelector((state) => state.auth);
  const [addAnswer] = useAddAnswerMutation();
  const [recordingObject, setRecordingObject] = useState(null); // This is set when the recording is in progress.
  const [recordingUri, setRecordingUri] = useState(null); // When the recording is complete, this is set to the URI of the recording on the local drive.
  const [isUploading, setIsUploading] = useState(false);

  const startStopRecording = async (): Promise<void> => {
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

  const saveRecording = async (questionId: string, stance: string): Promise<void> => {
    try {
      setIsUploading(true);
      const { url } = await uploadFile(recordingUri, id); // Upload the recording to S3.
      await addAnswer({
        recordingURL: url,
        questionId,
        stance,
      });
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
    startStopRecording,
    isRecording,
    reset,
    saveRecording,
    recordingUri,
  };
};

export const usePlayback = (uri: string | null): UsePlaybackHook => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackStatus, setPlaybackStatus] = useState<AVPlaybackStatus | null>(null);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [recordingUri, setRecordingUri] = useState(uri);
  const dispatch = useAppDispatch();

  const isBuffering = isAVPlaybackStatusSuccess(playbackStatus) ? playbackStatus?.isBuffering : false;
  const statusIsPlaying = isAVPlaybackStatusSuccess(playbackStatus) ? playbackStatus?.isPlaying : false;

  const createSound = async (): Promise<void> => {
    if (sound) {
      await sound.pauseAsync();
      await sound.unloadAsync();
    }

    const { sound: s, status } = await Audio.Sound.createAsync({ uri: recordingUri }, {}, setPlaybackStatus);
    await s.setIsLoopingAsync(false);
    setSound(s);
    setPlaybackStatus(status);
  };

  useEffect(() => {
    if (!statusIsPlaying) {
      setIsPlaying(false);
    }
  }, [statusIsPlaying]);

  // When the recordingUri changes, create a new sound for playback.
  useEffect(() => {
    if (!recordingUri) { return; }

    createSound();
  }, [recordingUri]);

  // Play/pause the sound when isPlaying changes.
  useEffect(() => {
    if (!sound) {
      return;
    }

    // See https://github.com/expo/expo/issues/9915#issuecomment-814270274
    Audio.setAudioModeAsync({ allowsRecordingIOS: false, playsInSilentModeIOS: true });

    if (isPlaying) {
      sound.playAsync();
    } else {
      sound.pauseAsync();
    }
  }, [isPlaying, sound, recordingUri]);

  const startStopPlayback = (): void => {
    if (isPlaying) {
      stopPlayback();
    } else {
      startPlayback();
    }
  };

  const startPlayback = (): void => {
    setIsPlaying(true);
    if (sound) {
      dispatch(addCurrentlyPlayingSound(sound));
      sound.playAsync();
    }
  };
  const stopPlayback = (): void => {
    setIsPlaying(false);
    if (sound) {
      dispatch(removeCurrentlyPlayingSound(sound));
      sound.pauseAsync();
    }
  };

  // Type casting here due to annoying quirk in expo-av with AVPlaybackStatus
  const duration = formatTime(playbackStatus && isAVPlaybackStatusSuccess(playbackStatus) ? (playbackStatus.durationMillis / 1000) : 0);
  const progress = formatTime(playbackStatus && isAVPlaybackStatusSuccess(playbackStatus) ? (playbackStatus.positionMillis / 1000) : 0);
  const isLoaded = playbackStatus?.isLoaded;

  return {
    startStopPlayback,
    isPlaying,
    isLoaded,
    duration,
    progress,
    setRecordingUri,
    startPlayback,
    stopPlayback,
    recordingUri,
    isBuffering,
  };
};
