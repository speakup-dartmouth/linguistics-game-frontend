/* eslint-disable global-require */
import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import styles from './styles';

function Loader({ width = 150, height = 150, fullWidth = false }: {width?: number, height?: number, fullWidth?: boolean}): JSX.Element {
  return (
    <View style={fullWidth ? styles.container : {}}>
      <LottieView autoPlay source={require('../../assets/loading.json')} style={{ width, height }} />
    </View>
  );
}

export default Loader;
