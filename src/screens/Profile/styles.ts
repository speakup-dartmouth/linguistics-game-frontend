import { colors } from 'lib/constants';
import { globalStyles } from 'lib/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer: {
    width: '80%',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  welcome: {
    ...globalStyles.headingTwo,
  },
  consentHeading: {
    ...globalStyles.headingTwo,
    marginTop: 20,
  },
  consentSubheading: {
    ...globalStyles.bodyLarge,
    textAlign: 'left',
    marginTop: 5,
  },
  buttonContainer: {
    flex: -1,
    alignItems: 'center',
    width: '100%',
    marginTop: 50,
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
    borderColor: '#737B7D',
    borderWidth: 2,
    margin: 7,
  },
  categoryText: {
    fontWeight: '500',
  },
  categoryPressed: {
    backgroundColor: '#E5F7FF',
    borderColor: colors.darkBlue,
    borderWidth: 4,
    margin: 5,
  },
  categoriesContainer: {
    flex: -1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
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
  },
  divider: {
    borderBottomColor: colors.lightBlack,
    borderBottomWidth: 1.5,
    width: '80%',
    margin: 10,
    marginTop: 20,
  },
});
