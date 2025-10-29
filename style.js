import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerList: {
    flex: 1,
    backgroundColor: '#fff',
    width: '80%',
  },
  containerheader:{
    flexDirection: 'row',
    height: '10%',
    width: '100%'
  },
  headerIcon:{
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c1ebea',
    borderBottomRightRadius: 10
  },
  headerText:{
    backgroundColor: '#f7f2dc',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10
  },
  title:{
    fontSize: 25
  }
});

export default styles;