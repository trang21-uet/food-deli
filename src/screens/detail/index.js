import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { MyButton, MyIcon } from '../../components';
import Rate from '../../components/Rate';
import Review from './review';
import { useTheme } from '@react-navigation/native';

var width = Dimensions.get('window').width;
const images = [
  {
    id: 1,
    url: require('../../assets/images/phobo.png'),
  },
  {
    id: 1,
    url: require('../../assets/images/phobo.png'),
  },
  {
    id: 1,
    url: require('../../assets/images/phobo.png'),
  },
  {
    id: 1,
    url: require('../../assets/images/phobo.png'),
  },
];

export default function Detail() {
  const [imgActive, setimgActive] = useState(0);
  const { colors } = useTheme();
  const styles = getStyles(colors);

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
  return (
    <ScrollView>
      <View style={styles.containerImage}>
        <ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          style={styles.wrap}
        >
          {images.map((image, index) => (
            <Image
              style={styles.wrap}
              source={image.url}
              resizeMode='stretch'
              key={index}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((element, index) => (
            <View
              key={index}
              style={imgActive == index ? styles.dotActive : styles.dot}
            ></View>
          ))}
        </View>
      </View>
      <View style={styles.detail}>
        <Text style={styles.name}>Phở 10 Lý Quốc Sư</Text>
        <Text style={styles.description}>
          Là sự kết hợp độc đáo giữa cà phê và hồng trà sữa, vị thơm đặc trưng
          của hồng trà thêm một chút hậu đắng của cafe sẽ làm bạn nhớ mãi.
        </Text>
        <Rate size={18} numberRate={4.6} />
        <View style={styles.price}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 22,
                fontFamily: 'Linotte-SemiBold',
                marginRight: 10,
              }}
            >
              100.000 Đ
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: colors.gray,
                textDecorationLine: 'line-through',
              }}
            >
              120.000 Đ
            </Text>
          </View>
          <MyButton
            style={styles.btn}
            title='Mua ngay'
            textStyle={{
              color: colors.white,
              fontSize: 16,
              textTransform: 'uppercase',
            }}
          />
        </View>
        <Review />
      </View>
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
      paddingTop: 5,
      paddingBottom: 8,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
  });
