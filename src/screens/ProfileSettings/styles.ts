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
  }
});
