import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  body_container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    marginLeft: 10,
    marginBottom: 5,
    alignItems: 'center',
    overflow: 'hidden',
  },
  category: {
    fontSize: 24,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
export default styles;
