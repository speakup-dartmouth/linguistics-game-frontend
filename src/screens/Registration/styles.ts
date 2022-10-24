import { StyleSheet } from 'react-native';
import { colors, dimensions } from 'lib/constants';
import { globalStyles } from 'lib/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  row: {
    backgroundColor: 'white',
    flex: -1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#E1E1E1',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: dimensions.height * 0.1,
    marginBottom: 30,
  },
  subview: {
    flex: -1,
    justifyContent: 'center',
    width: '85%',
  },
  dateOfBirth: {
    backgroundColor: '#F4F5F4',
    width: '50%',
    color: colors.lightBlack,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  submitButton: {
    backgroundColor: '#3297C1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    marginTop: 10,
    marginBottom: 10,
  },
  toggleButtonInactive: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
  },
  toggleButtonActive: {
    backgroundColor: '#A6DDF4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
  },
  textInactive: {
    fontSize: 16,
  },
  textActive: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText: {
    justifyContent: 'center',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  heading: {
    ...globalStyles.headingThree,
  },
  subheading: {
    ...globalStyles.bodySmall,
    marginBottom: 10,
  },
  dropdownRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    zIndex: 100,
  },
  dropdown: {
    backgroundColor: '#F4F5F4',
    borderWidth: 0,
    zIndex: 100,
  },
  dropdownContainer: {
    backgroundColor: '#F4F5F4',
    flex: 1,
    margin: 5,
    zIndex: 100,
    borderRadius: 10,
  },
  dropdownText: {
    color: colors.lightBlack,
  },
});
