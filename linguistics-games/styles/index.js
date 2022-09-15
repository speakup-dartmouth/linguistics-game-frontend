
import { StyleSheet } from 'react-native';
// added constant to change fonts at once
const PRIMARY_FONT = 'Inter_900Black';
export const ICON_SIZE = 24;

// PRIMARY COLORS
export const LIGHT_BLUE = '#A6DDF4';
export const YELLOW = '#FFBB37';
export const ORANGE = '#FF934F';
export const BLUE = '#5BC0EB';
export const PINK = '#FF6392';
export const LIGHT_YELLOW = '#FFD991';
export const DARK_BLUE = '#3297C1';
export const OFF_WHITE = '#FFFDFB';
export const NEUTRAL = '#7893B0';
export const DARK_NEUTRAL = '#152B47';
export const MEDIUM_NEUTRAL = '#425F80';

export const navTheme = {
  colors: {
    background: OFF_WHITE,
  },
};

const styles = StyleSheet.create({
  displayHeading: {
    fontFamily: PRIMARY_FONT,
    color: NEUTRAL,
    fontWeight: 700,
    fontSize: '28px',
    lineHeight: '20px',
    letterSpacing: '-0.4px',
    padding: 10,
  },
  display: {
    fontFamily: PRIMARY_FONT,
    color: DARK_NEUTRAL,
    fontWeight: 700,
    fontSize: '74px',
    lineHeight: '78px',
    letterSpacing: '-0.4px',
    padding: 10,
  },
  heading: {
    fontFamily: PRIMARY_FONT,
    color: NEUTRAL,
    fontWeight: 700,
    fontSize: '28px',
    lineHeight: '20px',
    letterSpacing: '-0.4px',
    padding: 10,
  },
  heading1: {
    fontFamily: PRIMARY_FONT,
    color: DARK_NEUTRAL,
    fontWeight: 700,
    fontSize: '36px',
    lineHeight: '40px',
    letterSpacing: '-0.4px',
    padding: 10,
  },
  heading2: {
    fontFamily: PRIMARY_FONT,
    color: DARK_NEUTRAL,
    fontWeight: 700,
    fontSize: '28px',
    lineHeight: '20px',
    letterSpacing: '-0.4px',
    padding: 10,
  },
  heading3: {
    fontFamily: PRIMARY_FONT,
    color: DARK_NEUTRAL,
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '28px',
    letterSpacing: '-0.4px',
    padding: 10,
  },
  bodyLarge: {
    fontFamily: PRIMARY_FONT,
    color: MEDIUM_NEUTRAL,
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '26px',
    letterSpacing: '0.2px',
    padding: 10,
  },
  bodyMedium: {
    fontFamily: PRIMARY_FONT,
    color: MEDIUM_NEUTRAL,
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.2px',
    padding: 10,
  },
  bodySmall: {
    fontFamily: PRIMARY_FONT,
    color: MEDIUM_NEUTRAL,
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '22px',
    letterSpacing: '0.2px',
    padding: 10,
  },
  caption: {
    fontFamily: PRIMARY_FONT,
    color: MEDIUM_NEUTRAL,
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '26px',
    letterSpacing: '0.2px',
    padding: 10,
  },
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 400,
    height: 300,
  },
  parentDisplayContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  parentDisplayHeader: {
    fontSize: 25,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  postButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 4,
    flex: 1,
    alignSelf: 'stretch',
  },
  postContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
  },
  section: {
    marginBottom: 16,
  },
  threeDots: {
    justifyContent: 'center',
  },
  signout: {
    marginRight: 10,
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginRight: 8,
    backgroundColor: 'black',
  },
  postImg: {
    width: 300,
    height: 300,
    marginTop: 4,
    marginBottom: 4,
    marginRight: 8,
    borderRadius: 4,
  },
  profileImg: {
    width: 32,
    height: 32,
    borderRadius: 16,
    padding: 8,
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
    padding: 8,
    height: 100,
  },
  baseText: {
    fontFamily: PRIMARY_FONT,
    margin: 4,
    padding: 4,
  },
  text: {
    fontFamily: PRIMARY_FONT,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: PRIMARY_FONT,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 4,
    marginRight: 4,
    padding: 4,
    paddingBottom: 0,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: PRIMARY_FONT,
    textAlign: 'left',
    margin: 4,
    padding: 4,
    paddingBottom: 0,
  },
  separator: {
    height: 1,
    backgroundColor: 'rgb(200,200,200)',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    fontFamily: PRIMARY_FONT,
    textAlign: 'left',
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: '#B2A18F',
    borderRadius: 24,
    paddingVertical: 10,
    width: '90%',
    margin: 5,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: 'rgba(158, 150, 150, .5)',
    alignSelf: 'stretch',
    width: 180,
    borderRadius: 8,
    borderColor: '#aaaaaa',
  },
  inputContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textarea: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignSelf: 'stretch',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: 'rgba(158, 150, 150, .5)',
  },
  profilePage: {
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerStyle: {
    backgroundColor: '#B0B2A1',
  },
  columns: {
    alignSelf: 'stretch',
    margin: 2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  submitButton: {
    backgroundColor: '#806C59',
    borderRadius: 24,
    paddingVertical: 10,
    margin: 5,
    marginTop: 10,
    paddingHorizontal: 25,
  },
  formLabel: {
    margin: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  paddingTop: {
    paddingTop: 20,
  }
});

export default styles;