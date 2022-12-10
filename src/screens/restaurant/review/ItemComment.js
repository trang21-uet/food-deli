import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Rate from '../../../components/Rate';
import { Datediff } from '../../../constants/function';

const ItemComment = ({ message, rate, user, time }) => {
  return (
    <View
      style={{
        marginBottom: 15,
        marginHorizontal: 12,
      }}
    >
      <View style={styles.container}>
        <View style={styles.containerLeft}>
          <Image
            style={styles.image}
            source={{ uri: user.thumbnail }}
            resizeMode='stretch'
          />
          <View>
            <Text style={{ fontFamily: 'Linotte-SemiBold' }}>
              {user.fullName}
            </Text>
            <Rate size={16} numberRate={Math.floor(rate * 10) / 10} />
          </View>
        </View>
        <View style={styles.containerRight}>
          <Text style={{ color: 'gray' }}>{Datediff(time)}</Text>
        </View>
      </View>
      <Text style={{ color: 'gray' }}>{message}</Text>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          borderBottomColor: '#e1e1e1',
          borderBottomWidth: 2,
          marginTop: 15,
        }}
      ></View>
    </View>
  );
};

export default ItemComment;

const styles = StyleSheet.create({
  containerLeft: {
    flexDirection: 'row',
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
