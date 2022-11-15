import { StyleSheet } from 'react-native';
import { colors } from 'lib/constants';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: -1,
    width: '100%',
    elevation: 2,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingBottom: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  imageContainer: {
    height: 250,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  stancePill: {
    borderWidth: 1,
    borderColor: colors.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: colors.white,
    backgroundColor: colors.lightBlue,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 7,
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
  },
  stanceContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10,
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.lightBlack,
    marginLeft: 10,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: colors.lightBlack,
    marginLeft: 10,
  },
});
