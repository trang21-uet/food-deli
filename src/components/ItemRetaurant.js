import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Rate from './Rate';
import { useNavigation, useTheme } from '@react-navigation/native';
import MyIcon from './MyIcon';
import Card from './Card';

const ItemRestaurant = ({
  id,
  name,
  description,
  backgroundImage,
  address,
  rate,
  numberRate,
}) => {
  const nav = useNavigation();
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <Card
      borderRadius={10}
      marginHorizontal={10}
      marginVertical={5}
      style={styles.container}
      onPress={() => nav.navigate('Restaurant', { id })}
    >
      <Image
        style={styles.image}
        source={{ uri: backgroundImage }}
        resizeMode={'cover'}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text numberOfLines={2} style={styles.address}>
          <MyIcon name='location-outline' size={18} />
          {address.detail +
            ', ' +
            address.awards +
            ', ' +
            address.district +
            ', ' +
            address.province}
        </Text>
        <View style={styles.footer}>
          {numberRate > 0 ? (
            <>
              <Rate size={16} numberRate={Math.floor(rate * 10) / 10} />
              <Text style={{ color: 'gray' }}>({numberRate} đánh giá)</Text>
            </>
          ) : (
            <Text style={{ color: 'gray' }}>(Chưa có đánh giá)</Text>
          )}
        </View>
      </View>
    </Card>
  );
};
const getStyles = colors =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: colors.card,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      overflow: 'hidden',
    },
    image: {
      height: 120,
      width: 120,
    },
    info: {
      flex: 1,
      height: 120,
      paddingHorizontal: 10,
      justifyContent: 'center',
    },
    name: {
      fontSize: 17,
      fontFamily: 'Linotte-SemiBold',
    },
    address: {
      color: colors.gray,
      fontSize: 13,
      marginBottom: 15,
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
export default ItemRestaurant;
