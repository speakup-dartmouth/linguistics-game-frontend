import { Dimensions } from 'react-native';

export const colors = {
  darkBlue: '#21779B',
  lightBlue: '#51A0C1',
  white: '#FFFFFF',
  yellow: '#FFBB37',
  lightBlack: '#373F41',
};

// export const apiUrl = 'http://localhost:9090/api/'; // FOR XCODE
export const apiUrl = 'https://linguistics-game-backend.onrender.com/api/';
// export const apiUrl = 'http://10.0.2.2:9090/api/'; // FOR ANDROID EMULATOR
export const s3BucketUrl = 'https://linguistics-games.s3.us-east-1.amazonaws.com';

export const dimensions = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};
 