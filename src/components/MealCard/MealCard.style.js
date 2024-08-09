import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    padding: 10,
  },
  body_container: {
    borderRadius: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: deviceSize.height / (24 / 5),
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 3,
  },
  name_container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 10,
  },
  name: {
    fontSize: 30,
    textAlign: 'right',
    color: '#fff',
    fontWeight: 'bold',
    opacity: 1,
  },
});

export default styles;
