import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ItemComment from './ItemComment';

export default function Review({ data }) {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Đánh giá</Text>
      </View>
      {data.length === 0 ? (
        <Text
          style={{
            color: 'gray',
            textAlign: 'center',
            fontSize: 16,
            marginBottom: 20,
          }}
        >
          Chưa có đánh giá nào
        </Text>
      ) : (
        <ScrollView>
          {data.map((item, index) => (
            <ItemComment key={index} {...item} />
          ))}
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 2,
    borderColor: '#e1e1e1',
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Linotte-SemiBold',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
});
