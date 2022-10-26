import { colors, dimensions } from 'lib/constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#E2E5E6',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  subcontainer: {
    marginTop: dimensions.height * 0.1,
    paddingHorizontal: dimensions.width * 0.05,
    width: '100%',
    flex: -1,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: '500',
    color: colors.lightBlack,
  },
  description: {
    fontSize: 16,
    color: colors.lightBlack,
    marginBottom: 20,
  },
  back: {
    position: 'absolute',
    top: 30,
    left: 20,
    fontWeight: '300',
  },
  divider: {
    height: 100,
  },
  buttonContainer: {
    alignSelf: 'center',
  },
});
