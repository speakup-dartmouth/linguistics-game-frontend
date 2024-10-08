import { colors } from 'lib/constants';
import { globalStyles } from 'lib/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  subcontainer: {
    width: '100%',
    flex: -1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  titleContainer: {
    width: '100%',
    flex: -1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
  },
  surveyContainer: {
    width: '100%',
    height: '85%',
    flex: -1,
    alignItems: 'flex-start',
    justifyContent: 'center', // Adjust as needed
    marginHorizontal: 0, 
    paddingLeft: 50,
  },
  questionContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  questionNumberContainer: {
    flex: -1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#FFC555',
  },
  questionTextContainer: {
    flex: -1,
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    // alignSelf: 'flex-start',
  },
  welcome: {
    ...globalStyles.headingTwo,
    textAlign: 'center',
  },
  consentHeading: {
    ...globalStyles.headingTwo,
    marginTop: 20,
    textAlign: 'center',
  },
  consentSubheading: {
    ...globalStyles.bodyLarge,
    textAlign: 'center',
    marginTop: 5,
  },
  consentLink: {
    ...globalStyles.bodyLarge,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
  aboutHeading: {
    ...globalStyles.headingTwo,
    marginTop: 20,
    textAlign: 'center',
  },
  aboutSubheading: {
    ...globalStyles.bodyLarge,
    textAlign: 'center',
    marginTop: 20,
  },
  aboutLink: {
    color: 'blue',
    textDecorationLine: 'underline',    
    marginTop: 20,
  },
  prevNextContainer: {
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingBottom: 15, // Padding to separate from the screen edge
    paddingTop: 10,
    marginLeft: 30,
  },
  buttonContainer: {
    bottom: 0,
    alignItems: 'center',
    width: '100%',
    marginTop: 50,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  categoriesGroup: {
    width: '90%',
    flex: -1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    marginVertical: 30,
  },
  categoryItem: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: '#E5F7FF',
    backgroundColor: '#E5F7FF',
    borderWidth: 2,
    margin: 7,
  },
  categoryText: {
    fontWeight: '500',
  },
  categoryPressed: {
    backgroundColor: '#A6DDF4',
    borderColor: '#A6DDF4',
    borderWidth: 4,
    margin: 5,
  },
  categoriesContainer: {
    flex: -1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    padding: 32,
  },
  pillGroup: {
    flex: -1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
  pill: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: '#E5F7FF',
    backgroundColor: '#E5F7FF',
    borderWidth: 2,
  },
  pillPressed: {
    backgroundColor: '#A6DDF4',
    borderColor: '#A6DDF4',
    borderWidth: 4,
    margin: 5,
  },
  pillText: {
    fontWeight: '500',
  },
  button: {
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
  buttonText: {
    fontSize: 20,
    color: colors.white,
  },
  profileImg: {
    width: 100,
    height: 100,
    margin: 15,
    aspectRatio: 1,
    alignSelf: 'center',
  },
  divider: {
    borderBottomColor: colors.lightBlack,
    borderBottomWidth: 1.5,
    width: '80%',
    margin: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  profileItem: {
    flex: 1,
    padding: 12,
    fontSize: 20,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
    marginVertical: 8,
  },
  logoutText: {
    color: 'red',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  itemWithIcon: {
    paddingRight: 32,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 48,
    paddingRight: 48,
    paddingTop: 16,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#737B7D',
  },
  tabTextSelected: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5BC0EB',
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'black',
    marginBottom: 10,
    textAlign: 'left',
  },
  questionNumber: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'black',
    textAlign: 'center',
  },
  note: {
    marginTop: 10,
  },
  multiselect: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: '#E5F7FF',
    backgroundColor: '#E5F7FF',
    borderWidth: 2,
    height: 50,
    width: 300,
    alignSelf: 'center',
    marginVertical: 10,
  },
  multiselectContainer: {
    maxHeight: 400,
    width: 200,
    borderRadius: 15,
    borderWidth: 0,
    flex: 1,
  },
  dropdownButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: '#E5F7FF',
    backgroundColor: '#E5F7FF',
    borderWidth: 2,
    height: 'auto',
    fontSize: 15,
    fontWeight: '500',
    // alignSelf: 'flex-start',
  },
  dropdownText: {
    fontWeight: '500',
    marginHorizontal: 0,
    fontSize: 15,
    paddingHorizontal: 0,
  },
  dropdownDropdown: {
    maxHeight: 400,
    width: 200,
    borderRadius: 15,
    borderWidth: 0,
    flex: 1,
  },
  dropdownRow: {
    marginTop: 2,
    backgroundColor: 'white',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 8,
    flexGrow: 1,
    alignItems: 'center',
  },
  listContainer: {
    padding: 30,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  listItemText: {
    flex: 1,
  },
  prompt: {
    marginBottom: 20,
    marginTop: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
  },
});
