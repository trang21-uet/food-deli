import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { windowWidth } from '../../constants/Dimension';
import Materialicons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MyIcon } from '../../components';
const data = [
  {
    id: 1,
    title: 'Quản lí đơn hàng',
    icon: 'md-lock-closed-outline',
    screen: 'OrderManagement',
  },
  {
    id: 2,
    title: 'Quản lý địa chỉ',
    icon: 'ios-location-outline',
    screen: 'AddressManager',
  },
  {
    id: 4,
    title: 'Giới thiệu về ứng dụng',
    icon: 'ios-information-circle-outline',
    screen: 'MainScreen',
  },
  {
    id: 5,
    title: 'Hướng dẫn',
    icon: 'ios-help-circle-outline',
    screen: 'MainScreen',
  },
  {
    id: 5,
    title: 'Đăng xuất',
    icon: 'ios-exit-outline',
    screen: 'Login',
  },
];
export default function Settings() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('../../assets/images/background1.jpg')}
          resizeMode={'cover'}
        />
        <View style={styles.profile}>
          <Image
            style={styles.imageprofile}
            source={require('../../assets/images/profile.jpg')}
            resizeMode={'cover'}
          />
          <View
            style={{
              justifyContent: 'space-between',
              paddingVertical: 8,
              paddingLeft: 10,
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                fontSize: 18,
                maxWidth: '80%',
                fontFamily: 'Linotte-SemiBold',
              }}
            >
              David Backham
            </Text>
            <Text
              numberOfLines={1}
              style={{
                color: colors.gray,
                maxWidth: '80%',
                fontFamily: 'Linotte-SemiBold',
              }}
            >
              Backham2001@gmail.com
            </Text>
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
        {data.map((element, index) => (
          <ItemSetting {...element} key={index} />
        ))}
      </View>
    </View>
  );
}

const ItemSetting = ({ icon, screen, title }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <TouchableNativeFeedback onPress={() => navigation.navigate(screen)}>
      <View style={styles.button}>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <MyIcon name={icon} size={25} color={colors.gray} />
          <Text
            style={{
              marginLeft: 10,
              marginTop: -2,
              fontFamily: 'Linotte-SemiBold',
              fontSize: 16,
            }}
          >
            {title}
          </Text>
        </View>
        <MyIcon name='chevron-forward' size={25} />
      </View>
    </TouchableNativeFeedback>
  );
};
const getStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      height: 200,
      width: windowWidth,
    },
    profile: {
      flexDirection: 'row',
      backgroundColor: colors.white,
      marginHorizontal: 30,
      padding: 10,
      borderRadius: 5,
      marginTop: -50,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    imageprofile: {
      height: 80,
      width: 80,
      borderRadius: 40,
    },
    button: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 15,
      paddingHorizontal: 5,
      borderBottomWidth: 2,
      borderColor: '#e1e1e1',
    },
  });
