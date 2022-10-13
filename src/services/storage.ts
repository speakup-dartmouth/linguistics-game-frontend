import AsyncStorage from '@react-native-async-storage/async-storage';
import Recording from 'types/recording';

/**
 * @returns A list of recordings stored in AsyncStorage.
 */
export const getRecordings = async (): Promise<Recording[]> => {
  const recordings = await AsyncStorage.getItem('recordings');
  return recordings != null ? JSON.parse(recordings) : [];
};

/**
 * Store a recording in AsyncStorage.
 * @param recording The recording to store in AsyncStorage.
 */
export const addRecording = async (recording: Recording): Promise<void> => {
  const recordings = await getRecordings();
  recordings.push(recording);
  await AsyncStorage.setItem('recordings', JSON.stringify(recordings));
};

export const storeToken = async (value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem('@token', value);
  } catch (e) {
    console.log(e);
  }
};

export const clearToken = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem('@token');
  } catch (e) {
    console.log(e);
  }
};

export const getToken = async (): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem('@token');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
  return null;
};
