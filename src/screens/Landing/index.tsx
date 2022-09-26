import Recorder from 'components/Recorder';
import Recording from 'types/recording';
import { useEffect, useState } from 'react';
import {
  SafeAreaView, Text,
} from 'react-native';
import { addRecording, getRecordings } from 'services/storage';
import styles from './styles';

function LandingScreen(): JSX.Element {
  const [recordings, setRecordings] = useState<Recording[]>([]);
  console.log(recordings);
  useEffect(() => {
    getRecordings().then((r) => setRecordings(r));
  }, []);

  const updateRecording = (filename: string, url: string): void => {
    const recording: Recording = { filename, url };
    setRecordings([...recordings, recording]);
    addRecording(recording);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>This text is currently a placeholder.</Text>
      <Recorder updateRecording={updateRecording} />
    </SafeAreaView>
  );
}

export default LandingScreen;
