import { colors, dimensions } from 'lib/constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
    fontWeight: '600',
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
  recordingUi: {
    flex: -1,
    width: '100%',
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    alignSelf: 'center',
    padding: 20,
  },
  recordingHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.lightBlack,
    marginBottom: 10,
  },
  recordingSubheader: {
    fontSize: 16,
    color: colors.lightBlack,
    marginBottom: 20,
  },
  stanceContainer: {
    flex: -1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ADD5E6',
    borderRadius: 10,
  },
  stanceButton: {
    flexGrow: 1,
    paddingVertical: 10,
    borderRadius: 10,
  },
  stanceText: {
    textAlign: 'center',
    fontWeight: '600',
  },
  dividerVertical: {
    height: '100%',
    width: 1,
    backgroundColor: '#3297C1',
  },
  kernedText: {
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: 0.8,
    color: '#9AB1BB',
  },
  recordButton: {
    marginTop: 30,
    alignSelf: 'flex-end',
  },
});
