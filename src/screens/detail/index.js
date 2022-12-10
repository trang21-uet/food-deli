import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Loading, MyButton, MyIcon } from '../../components';
import Rate from '../../components/Rate';
import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import Other from './Other';
import { host } from '../../constants/Data';
import numberWithCommas from '../../constants/function';
import Materialicons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

var width = Dimensions.get('window').width;

export default function Detail() {
  const [imgActive, setimgActive] = useState(0);
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id, restaurantId } = useRoute().params;
  const nav = useNavigation();
  const [res, setRes] = useState({});

  const request = async () => {
    try {
      const response = await fetch(host + '/api/food?id=' + id, {
        method: 'GET',
      });
      const json = await response.json();

      setData(json);
      setLoading(false);
      // console.log(json);
    } catch (error) {}
  };

  const getResInfo = async () => {
    try {
      const response = await fetch(host + '/api/restaurant?id=' + restaurantId);
      const { id, name } = await response.json();
      // console.log({ id, name });
      setRes({ id, name });
    } catch (error) {}
  };

  const getUserId = async () => {
    const info = await AsyncStorage.getItem('user');
    return JSON.parse(info).userId;
  };

  const onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };

  const addToCart = async () => {
    let current = await AsyncStorage.getItem('cart');
    current = JSON.parse(current);
    if (current !== null) {
      const resName = current.map(item => item.name);
      if (resName.includes(res.name)) {
        const index = resName.indexOf(res.name);
        const foodName = current[index].foods.map(({ food }) => food.name);
        if (foodName.includes(data.name)) {
          const j = foodName.indexOf(data.name);
          current[index].foods[j].amount++;
        } else {
          current[index].foods.push({ amount: 1, food: data });
        }
      } else {
        current.push({
          id: res.id,
          name: res.name,
          foods: [{ food: data, amount: 1 }],
        });
      }
    } else {
      current = [];
      current.push({
        id: res.id,
        name: res.name,
        foods: [{ food: data, amount: 1 }],
      });
    }
    console.log(current);
    await AsyncStorage.setItem('cart', JSON.stringify(current));
  };

  useEffect(() => {
    request();
    getResInfo();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <ScrollView>
      <View style={styles.containerImage}>
        <ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          style={styles.wrap}
        >
          {data.images.map(({ url }, index) => (
            <Image
              style={styles.wrap}
              source={{ uri: url }}
              resizeMode='stretch'
              key={index}
            />
          ))}
        </ScrollView>
        {data.images.length > 1 && (
          <View style={styles.wrapDot}>
            {data.images.map((_, index) => (
              <View
                key={index}
                style={imgActive == index ? styles.dotActive : styles.dot}
              ></View>
            ))}
          </View>
        )}
      </View>
      <View style={styles.detail}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => nav.navigate('Restaurant', { id: data.restaurant.id })}
        >
          <Materialicons
            name='storefront'
            size={25}
            color={colors.gray}
            activeOpacity={0.8}
            style={{ marginRight: 5 }}
          />
          <Text
            style={[
              styles.description,
              {
                fontFamily: 'Linotte-Bold',
                marginRight: 10,
                fontSize: 16,
                textDecorationLine: 'underline',
              },
            ]}
          >
            {data.restaurant.name}
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <Rate
            size={18}
            numberRate={Math.floor(data.restaurant.rate * 10) / 10}
          />
          <Text style={{ color: colors.gray }}>
            ({data.restaurant.numberRate} lượt đánh giá)
          </Text>
        </View>
        <View style={styles.price}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 22,
                fontFamily: 'Linotte-SemiBold',
                marginRight: 10,
              }}
            >
              {numberWithCommas(data.price)} Đ
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: colors.gray,
                fontFamily: 'Linotte-SemiBold',
                textDecorationLine: 'line-through',
              }}
            >
              {numberWithCommas(data.oldPrice)} Đ
            </Text>
          </View>
        </View>
        <MyButton
          style={styles.btn}
          title='Thêm vào giỏ hàng'
          onPress={async () => {
            await addToCart();
            ToastAndroid.show('Đã thêm món ăn vào giỏ hàng', 2000);
          }}
          textStyle={{
            color: colors.white,
            fontSize: 16,
            textTransform: 'uppercase',
          }}
        />
      </View>
      <Other id={id} restaurantId={restaurantId} />
    </ScrollView>
  );
}

const getStyles = colors =>
  StyleSheet.create({
    wrap: {
      width: width,
      height: 250,
    },
    name: {
      fontSize: 25,
      fontFamily: 'Linotte-SemiBold',
    },
    detail: {
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    description: {
      color: colors.gray,
      marginBottom: 10,
    },

    wrapDot: {
      flexDirection: 'row',
      marginTop: 5,
      paddingHorizontal: 4,
      alignSelf: 'center',
    },
    dotActive: {
      margin: 3,
      height: 8,
      borderRadius: 4,
      width: 25,
      backgroundColor: colors.primary,
    },
    dot: {
      margin: 3,
      height: 8,
      width: 8,
      borderRadius: 4,
      backgroundColor: '#e1e1e1',
    },
    price: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    btn: {
      backgroundColor: colors.primary,
      alignItems: 'center',
      marginVertical: 10,
      paddingTop: 7,
      paddingBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
  });
