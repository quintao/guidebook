import { Text, View, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.text,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: Colors.link,
  },
});

