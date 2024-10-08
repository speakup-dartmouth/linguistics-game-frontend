import { useFocusEffect } from '@react-navigation/native';
import Recording from 'types/recording';
import { useCallback, useState } from 'react';
import {
  SafeAreaView, TouchableOpacity, Text, ScrollView, View,
} from 'react-native';
import { getRecordings } from 'services/storage';
import PlayButton from 'components/Recorder/PlayButton';
import styles from './styles';

function RecordingListScreen(): JSX.Element {
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [selectedRecording, setSelectedRecording] = useState<Recording | null>(null);

  const fetchRecordings = useCallback((): void => {
    getRecordings().then((r) => setRecordings(r));
  }, [getRecordings]);

  useFocusEffect(fetchRecordings); // Runs whenever the tab navigation changes

  const select = (recording: Recording): void => {
    // If you tap the same recording twice in a row the play button goes away.
    if (selectedRecording && selectedRecording.filename === recording.filename) {
      setSelectedRecording(null);
    } else {
      setSelectedRecording(recording);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.play}>
        {selectedRecording && <PlayButton recordingUri={selectedRecording.url} />}
      </View>

      <ScrollView style={styles.list}>
        {recordings.map((recording) => (
          <TouchableOpacity style={{
            ...styles.recording,
            backgroundColor: selectedRecording && recording.filename === selectedRecording.filename ? 'rgba(0,0,0,0.05)' : 'white',
          }}
            key={recording.filename}
            onPress={(): void => select(recording)}
          >
            <Text>{recording.filename}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default RecordingListScreen;
