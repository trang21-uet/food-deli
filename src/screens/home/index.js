import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { MyButton } from '../../components';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MyButton
        title='Home'
        onPress={() => navigation.navigate('Home')}
        style={styles.button}
        textStyle={styles.text}
      />
      <MyButton
        title='Search'
        onPress={() => navigation.navigate('Search')}
        style={styles.button}
        textStyle={styles.text}
      />
      <MyButton
        title='Register'
        onPress={() => navigation.navigate('Register')}
        style={styles.button}
        textStyle={styles.text}
      />
      <MyButton
        title='Login'
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
        textStyle={styles.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 20,
    backgroundColor: '#fd7a5c',
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
});
