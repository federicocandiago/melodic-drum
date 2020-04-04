import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {    
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  loadingText: {
    fontSize: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%'
  },
  loadingScreen: {
    backgroundColor: 'black'
  },
  button: {
    margin: 30,
    width: 150,
    alignSelf: 'center'
  }
});

export default styles;