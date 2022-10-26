import { View } from 'react-native';
import WaveformSvg from 'assets/waveform.svg';
import styles from './styles';

function Waveform({ isRecording }: {isRecording: boolean}): JSX.Element {
  return (
    <View style={{
      ...styles.waveform,
      backgroundColor: isRecording ? '#6AAFCF' : '#D4E1E7',
    }}
    >
      <WaveformSvg />
    </View>
  );
}

export default Waveform;
