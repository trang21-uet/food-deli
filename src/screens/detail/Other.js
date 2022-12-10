import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { host } from '../../constants/Data';
import { Loading, VerticalDish } from '../../components';

export default function Other({ id, restaurantId }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const request = async () => {
    try {
      const response = await fetch(
        host + '/api/restaurant/' + restaurantId + '/food?food_skip=' + id
      );
      const json = await response.json();

      setData(json);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    request();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Có thể bạn quan tâm</Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          marginBottom: 10,
          justifyContent: 'center',
        }}
      >
        {data.map((item, index) => (
          <View key={index} style={{ maxWidth: '48%', padding: 5 }}>
            <VerticalDish {...item} noRate restaurant={{ id: restaurantId }} />
          </View>
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
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Linotte-SemiBold',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
});
