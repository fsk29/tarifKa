import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body_container: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: deviceSize.height / 3,
  },
  title: {
    fontSize: 30,
    color: '#a52a2a',
    fontWeight: 'bold',
  },
  area: {
    fontSize: 22,
    color: '#a52a2a',
    fontWeight: 'bold',
  },
  seperator: {
    width: '100%',
    height: 2,
    backgroundColor: '#ccc',
  },
  instruct: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  button_text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default styles;
