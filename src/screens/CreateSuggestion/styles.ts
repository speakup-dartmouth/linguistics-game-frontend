import { colors, dimensions } from 'lib/constants';
import { globalStyles } from 'lib/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 30,
  },
  arrow: {
    marginRight: 7
  },
  headerText: {
    fontSize: 24,
  },
  inputContainer: {
    height: '60%',
    width: '100%',
    paddingLeft: 20,
    marginTop: 25,
    justifyContent: 'space-evenly',
    // backgroundColor: 'black'
  },
  labelText: {
    fontWeight: 'bold',
    fontSize: 20,
    // marginLeft: 15,
  },
  promptInput: {
    padding: 10,
    paddingRight: 20,
    paddingLeft: 15,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 10,
    width: '90%',
    borderColor: '#C3CBCD',
  },
  descriptionText: {
    color: '#737B7D',
    fontSize: 11,
    marginTop: 5
  },
  stanceInput: {
    padding: 10,
    paddingRight: 20,
    paddingLeft: 15,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 10,
    width: '60%',
    borderColor: '#C3CBCD',
  },
  dropdown: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#C3CBCD',
    color: '#C3CBCD',
    borderRadius: 8,
    width: '100%',
    height: 40,
    marginTop: 10,
  },
  dropdownContainer: {
    backgroundColor: 'white',
    width: '60%',
  },
  dropdownText: {
    color: 'black',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 25,
    marginBottom: 20,
  },
  checkboxTextContainer: {
    flexDirection: 'row',
    marginLeft: 8,
    marginTop: 2,
    alignItems: 'baseline',
  },
  checkboxLabel: {
    fontSize: 10,
    color: '#737B7D',
  },
  highlightedText: {
    color: 'blue',
    fontSize: 10,
    marginTop: 2,
    textDecorationLine: 'underline',
  },
  submitButton: {
    backgroundColor: colors.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 3,
    marginTop: 10,
    marginBottom: 25,
    height: '6%',
    width: '64%',
  },
  buttonText: {
    justifyContent: 'center',
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  stanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorSwatch: {
    width: 20,
    height: 20,
    borderRadius: 5,
    margin: 10,
  },
  shadowContainer: {
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  colorContainer: {
    backgroundColor: 'white',
    // width: 100,
    // height: 100,
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
