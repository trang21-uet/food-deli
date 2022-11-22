import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Header, MyButton, MyIcon, Pill } from '../../components';

const data = {
  restaurant: {
    name: 'Nhất Quán',
    description: 'Quán ăn sinh viên',
    distance: 3,
    image:
      'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80',
  },
  items: [
    {
      name: 'Bún chả',
      price: 35000,
      description: 'Thêm bún',
      quantity: 1,
      image:
        'https://img.taste.com.au/1HfSbEeh/w720-h480-cfill-q80/taste/2016/11/bun-cha-93944-1.jpeg',
    },

    {
      name: 'Cơm rang dưa bò',
      price: 30000,
      description: '',
      quantity: 2,
      image:
        'https://cdn.beptruong.edu.vn/wp-content/uploads/2018/09/com-rang-dua-bo.jpg',
    },
  ],
};

export default function Cart() {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const total = data.items.reduce(
    (total, cur) => total + cur.price * cur.quantity,
    0
  );

  const ship = data.restaurant.distance * 10000;

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={[styles.bold, { marginVertical: 20 }]}>My order</Text>
          <Pill
            borderRadius={20}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: colors.card,
              borderRadius: 20,
              padding: 10,
            }}
          >
            <Image
              source={{ uri: data.restaurant.image }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                marginHorizontal: 5,
              }}
            />
            <View style={{ flex: 1, marginHorizontal: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>
                {data.restaurant.name}
              </Text>
              <Text style={{ color: '#777' }}>
                {data.restaurant.description}
              </Text>
            </View>
            <TouchableOpacity>
              <MyIcon name='chevron-forward' />
            </TouchableOpacity>
          </Pill>
          {data.items.map((item, index) => (
            <Order {...item} key={index} />
          ))}
          <Pill
            borderRadius={20}
            marginVertical={20}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 15,
              borderRadius: 20,
              backgroundColor: colors.card,
            }}
          >
            <Text style={{ fontSize: 16 }}>Chưa chọn voucher</Text>
            <TouchableOpacity>
              <MyIcon name='chevron-forward' />
            </TouchableOpacity>
          </Pill>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 16 }}>Giá món ăn</Text>
            <Text>{total + ' đ'}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>
              Phí giao hàng ({data.restaurant.distance} km)
            </Text>

            <Text>{ship + ' đ'}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: '500' }}>
              Tổng thanh toán
            </Text>
            <Text
              style={{ color: colors.primary, fontSize: 16, fontWeight: '500' }}
            >
              {total + ship + ' đ'}
            </Text>
          </View>

          <MyButton
            style={{
              width: '100%',
              borderRadius: 10,
              backgroundColor: colors.primary,
              paddingVertical: 15,
              marginVertical: 20,
            }}
            textStyle={{
              color: colors.white,
              textTransform: 'uppercase',
              textAlign: 'center',
              fontSize: 16,
              fontWeight: 'bold',
            }}
            title='Thanh toán'
          />
        </View>
      </ScrollView>
    </View>
  );
}

const Order = ({ name, image, description, quantity, price }) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
      }}
    >
      <View
        style={{ backgroundColor: colors.card, padding: 10, borderRadius: 10 }}
      >
        <Image
          source={{ uri: image }}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
      </View>
      <View style={{ flex: 1, flexDirection: 'column', marginStart: 20 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>{name}</Text>
          <Text style={{ fontSize: 13, color: '#777' }}>{description}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text>{price + ' đ'}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                backgroundColor: colors.white,
                borderRadius: 5,
                overflow: 'hidden',
              }}
            >
              <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple(
                  colors.primary,
                  true
                )}
              >
                <View style={{ padding: 5 }}>
                  <MyIcon name='remove' size={20} />
                </View>
              </TouchableNativeFeedback>
            </View>
            <Text style={{ marginHorizontal: 10 }}>{quantity}</Text>
            <View
              style={{
                backgroundColor: colors.white,
                borderRadius: 5,
                overflow: 'hidden',
              }}
            >
              <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple(
                  colors.primary,
                  true
                )}
              >
                <View style={{ padding: 5 }}>
                  <MyIcon name='add' size={20} />
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const getStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 30,
    },
    bold: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
