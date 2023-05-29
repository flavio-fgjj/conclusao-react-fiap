import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 16,
    backgroundColor: '#e0fbfc',
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  body: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  description: {
    fontSize: 14,
    textAlign: 'justify',
    color: 'black',
  },
});
