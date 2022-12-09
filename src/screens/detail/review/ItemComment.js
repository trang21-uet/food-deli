import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Rate from '../../../components/Rate';

const ItemComment = () => {
  return (
    <View style={{ marginBottom: 15 }}>
      <View style={styles.container}>
        <View style={styles.containerLeft}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/profile.jpg')}
            resizeMode='stretch'
          />
          <View>
            <Text style={{ fontFamily: 'Linotte-SemiBold' }}>Chương Lê</Text>
            <Rate size={16} numberRate={3} />
          </View>
        </View>
        <View style={styles.containerRight}>
          <Text style={{ color: 'gray' }}>1 ngày trước</Text>
        </View>
      </View>
      <Text>
        Nếu ai theo dõi nations league thì những đội nào thuộc châu âu có phong
        độ ko tốt đều thể hiện gần như là rõ rồi.
      </Text>
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
