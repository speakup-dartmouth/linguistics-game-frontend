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
  display: {
    width: '100%',
    height: '88%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'black'
  },
  header: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 15,
  },
  card: {
    width: '95%',
    height: '19%',
    // marginBottom: 10
    // backgroundColor: 'black'
  },
  headerText: {
    fontSize: 24,
  },
  arrow: {
    marginRight: 7
  },
  shadowContainer: {
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  statsContainer: {
    height: '40%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    // marginBottom: 10
  },
  timelineContainer: {
    height: '30%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    // marginBottom: 10
  },
  promptText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10
  },
  percent: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  infoContainer: {
    height: '85%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
    // backgroundColor: 'black'
  },
  stats: {
    height: '90%',
    width: '30%',
    justifyContent: 'space-evenly',
    // backgroundColor: 'blue'
  },
  separator: {
    height: 1,
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#E2E5E6',
  },
  statText: {
    fontSize: 26,
    fontWeight: '500'
  },
  statType: {
    fontSize: 15,
    fontWeight: '500'
  },
  timelineText: {
    color: 'rgba(0, 0, 0, 0.50)',
    fontSize: 14,
    fontWeight: '500'
  },
  checkColumn: {
    height: '100%',
    width: '20%',
    // justifyContent: 'space-evenly',
    marginTop: 10,
    alignItems: 'center',
    // backgroundColor: 'black'
  },
  line: {
    width: 2,
    height: '13%',
    backgroundColor: '#30CFCD'
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  timeline: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    // backgroundColor: 'black',
    height: '82%',
    overflow: 'hidden',
  },
  status: {
    height: '100%',
    width: '70%',
    marginTop: 10,
    // justifyContent: 'space-evenly'
    // backgroundColor: 'black'
  },
  invisibleLine: {
    height: '15%',
  }
});
