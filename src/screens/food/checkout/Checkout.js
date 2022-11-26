import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import { MyButton, MyIcon, Pill, Order } from '../../../components';

export default function Checkout() {
  const { data } = useRoute().params;
  const { colors } = useTheme();
  const nav = useNavigation();
  const [expanded, setExpanded] = useState(false);

  const animation = useRef(new Animated.Value(0)).current;

  const rotate = () => {
    setExpanded(true);
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const rotateBackwards = () => {
    setExpanded(false);
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const spin = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg'],
  });

  const slide = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 0],
  });

  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300],
  });

  const total = data.items.reduce(
    (total, cur) => total + cur.price * cur.quantity,
    0
  );

  const ship = data.restaurant.distance * 10000;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: 30,
          marginVertical: 10,
        }}
      >
        <Pill
          borderRadius={20}
          marginVertical={10}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: colors.card,
            borderRadius: 20,
            padding: 10,
          }}
          onPress={() => nav.navigate('Recipient')}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MyIcon
              name='person-outline'
              size={20}
              color={colors.primary}
              style={{ paddingHorizontal: 10 }}
            />
            <Text>Thông tin người nhận</Text>
          </View>

          <TouchableOpacity onPress={() => nav.navigate('Recipient')}>
            <MyIcon name='chevron-forward' size={20} style={{ padding: 10 }} />
          </TouchableOpacity>
        </Pill>

        <Pill
          borderRadius={20}
          marginVertical={10}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: colors.card,
            borderRadius: 20,
            padding: 10,
          }}
          onPress={() => nav.navigate('Address')}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MyIcon
              name='location-outline'
              size={20}
              color={colors.primary}
              style={{ paddingHorizontal: 10 }}
            />
            <Text>Địa chỉ</Text>
          </View>

          <TouchableOpacity onPress={() => nav.navigate('Address')}>
            <MyIcon name='chevron-forward' size={20} style={{ padding: 10 }} />
          </TouchableOpacity>
        </Pill>

        <Pill
          borderRadius={20}
          marginVertical={10}
          onPress={() => nav.navigate('Payment')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: colors.card,
            borderRadius: 20,
            padding: 10,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MyIcon
              name='wallet-outline'
              size={20}
              color={colors.primary}
              style={{ paddingHorizontal: 10 }}
            />
            <Text>Phương thức thanh toán</Text>
          </View>

          <TouchableOpacity onPress={() => nav.navigate('Payment')}>
            <MyIcon name='chevron-forward' size={20} style={{ padding: 10 }} />
          </TouchableOpacity>
        </Pill>

        <Pill
          borderRadius={20}
          marginVertical={10}
          onPress={() => {
            expanded ? rotateBackwards() : rotate();
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: colors.card,
            borderRadius: 20,
            padding: 10,
          }}
        >
          <View style={{ marginStart: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: '500' }}>Đơn hàng</Text>
            <Text style={{ color: '#777' }}>{data.restaurant.name}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                color: colors.primary,
                fontSize: 16,
                fontWeight: '500',
                marginEnd: 5,
              }}
            >
              {total + ship} đ
            </Text>
            <TouchableOpacity
              onPress={() => {
                expanded ? rotateBackwards() : rotate();
              }}
            >
              <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <MyIcon size={20} name='chevron-down' style={{ padding: 5 }} />
              </Animated.View>
            </TouchableOpacity>
          </View>
        </Pill>

        <Animated.View
          style={{
            maxHeight: height,
            overflow: 'hidden',
          }}
        >
          {data.items.map((item, index) => (
            <Order {...item} key={index} />
          ))}
        </Animated.View>
      </ScrollView>

      <View style={{ paddingHorizontal: 30 }}>
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
    </View>
  );
}
