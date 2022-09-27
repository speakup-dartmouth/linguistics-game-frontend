import AsyncStorage from '@react-native-async-storage/async-storage';
import Recording from 'types/recording';

export const getRecordings = async (): Promise<Recording[]> => {
  const recordings = await AsyncStorage.getItem('recordings');
  return recordings != null ? JSON.parse(recordings) : [];
};

export const addRecording = async (recording: Recording): Promise<void> => {
  const recordings = await getRecordings();
  recordings.push(recording);
  await AsyncStorage.setItem('recordings', JSON.stringify(recordings));
};
