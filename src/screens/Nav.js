import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Nav() {
  return (
    <View style={styles.nav}>
      <Text>Nav</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
