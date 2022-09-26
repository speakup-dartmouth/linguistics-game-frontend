import {
  View, TouchableOpacity, Button,
} from 'react-native';
import Record from 'assets/record.svg';
import Stop from 'assets/stop.svg';
import { Audio } from 'expo-av';
import { useState } from 'react';
import styles from './styles';
import PlayButton from './PlayButton';

function Recorder(): JSX.Element {
  const [recordingObject, setRecordingObject] = useState(null); // This is set when the recording is in progress.
  const [recordingUri, setRecordingUri] = useState(null); // When the recording is complete, this is set to the URI of the recording on the local drive.

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

  const saveRecording = (): void => {
    console.log('save');
  };

  return (
    <View style={styles.container}>
      {!recordingUri && (
      <TouchableOpacity onPressOut={onPress}>
        {recordingObject ? <Stop width={190} height={190} style={styles.stop} /> : <Record width={190} height={190} />}
      </TouchableOpacity>
      )}

      {recordingUri && <PlayButton recordingUri={recordingUri} />}

      {
        recordingUri && (
          <View style={styles.actionButtons}>
            <Button title="Reset" onPress={reset} />
            <Button title="Save" onPress={saveRecording} />
          </View>
        )
      }
    </View>
  );
}

export default Recorder;
