import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';

const ItemOrder = ({ code, restaurantName, total, state, images }) => {
  const nav = useNavigation();
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => nav.navigate('OrderDetail')}
    >
      <Image
        style={styles.image}
        source={{ uri: images[0].url }}
        resizeMode={'cover'}
      />
      <View style={styles.detail}>
        <View>
          <Text style={{ fontFamily: 'Linotte-SemiBold' }}>
            Cửa hàng: {restaurantName}
          </Text>
          <Text numberOfLines={1} style={styles.title}>
            Mã đơn hàng: {code}
          </Text>
          <Text style={styles.title}>Số lượng: {total} món</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Trạng thái: {state}</Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          position: 'absolute',
          right: 10,
          bottom: 5,
          color: colors.primary,
        }}
      >
        200.0000 Đ
      </Text>
    </TouchableOpacity>
  );
};

export default ItemOrder;

const getStyles = colors =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: colors.card,
      borderRadius: 10,
      marginTop: 10,
      overflow: 'hidden',
    },

    image: {
      height: 120,
      width: 120,
    },
    detail: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginLeft: 10,
      paddingVertical: 5,
      justifyContent: 'space-between',
    },
    title: {
      color: colors.gray,
      fontSize: 13,
    },
  });
