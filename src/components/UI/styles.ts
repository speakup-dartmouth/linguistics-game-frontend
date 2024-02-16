import {
  StyleSheet,
} from 'react-native';
import { colors } from 'lib/constants';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.darkBlue,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  textBox: {
    backgroundColor: '#F4F5F4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    color: colors.lightBlack,
  },
  checkboxes: {
    flex: -1,
    flexDirection: 'row',
  },
  toggleContainer: {
    flex: -1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ADD5E6',
    borderRadius: 10,
  },
  toggleButton: {
    flexGrow: 1,
    paddingVertical: 10,
    borderRadius: 10,
  },
  toggleText: {
    textAlign: 'center',
    fontWeight: '600',
  },
  dividerVertical: {
    height: '100%',
    width: 1,
    backgroundColor: '#3297C1',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  pill: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: '#E5F7FF',
    backgroundColor: '#E5F7FF',
    borderWidth: 2,
    margin: 7,
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
  dropdownButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: '#E5F7FF',
    backgroundColor: '#E5F7FF',
    borderWidth: 2,
    margin: 9,
    height: 'auto',
  },
  dropdownText: {
    fontWeight: '500',
    fontSize: 15,
  },
  dropdownDropdown: {
    maxHeight: 200,
    backgroundColor: 'white',
  },
  dropdownRow: {
    padding: 8,
    marginTop: 2,
    backgroundColor: '#ddd',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 15,
  },
});

export default styles;
