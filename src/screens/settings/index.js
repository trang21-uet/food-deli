import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Settings() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => navigation.navigate('Home')}>
        <View style={styles.button}>
          <Text style={styles.text}>Home</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => navigation.navigate('Search')}>
        <View style={styles.button}>
          <Text style={styles.text}>Search</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => navigation.navigate('Settings')}>
        <View style={styles.button}>
          <Text style={styles.text}>Settings</Text>
        </View>
      </TouchableNativeFeedback>
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
