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
    minHeight: 220,
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
  waveform: {
    flex: -1,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: -10,
  },
  recordingControls: {
    alignSelf: 'center',
    marginTop: 30,
  },
  submit: {
    alignSelf: 'center',
    marginTop: 20,
  },
  answerContainer: {
    flex: -1,
    minWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E5E6',
    padding: 10,
  },
  answerStance: {
    backgroundColor: '#B3D8FF',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginLeft: 5,
  },
  stanceText: {
    color: 'white',
    fontWeight: '500',
  },
  scrollView: {
    marginTop: 30,
    paddingBottom: 100,
    width: '100%',
  },
  username: {
    marginLeft: 10,
    marginBottom: 5,
    fontWeight: '700',
  },
  stanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
});
