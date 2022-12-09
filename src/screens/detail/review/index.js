import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ItemComment from './ItemComment';

export default function Review() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Đánh giá</Text>
      </View>
      <ScrollView>
        {[1, 1, 1, 1].map((item, index) => (
          <ItemComment key={index} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 2,
    borderColor: '#e1e1e1',
    marginVertical: 15,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Linotte-SemiBold',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
});
