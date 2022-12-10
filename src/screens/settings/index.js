import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  ToastAndroid,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { windowWidth } from '../../constants/Dimension';
import { MyIcon } from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Intro from './Intro';
import Help from './Help';
import ChangeInfo from './ChangeInfo';

const data = [
  {
    id: 1,
    title: 'Quản lí đơn hàng',
    icon: 'md-lock-closed-outline',
    screen: 'OrderManagement',
    lock: true,
  },
  {
    id: 2,
    title: 'Quản lý địa chỉ',
    icon: 'ios-location-outline',
    screen: 'AddressManager',
    lock: true,
  },
  {
    id: 4,
    title: 'Giới thiệu về ứng dụng',
    icon: 'ios-information-circle-outline',
    screen: 'Intro',
    lock: false,
  },
  {
    id: 5,
    title: 'Hướng dẫn',
    icon: 'ios-help-circle-outline',
    screen: 'Help',
    lock: false,
  },
];

export default function Settings() {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const [user, setUser] = useState();

  const getInfo = async () => {
    try {
      let info = await AsyncStorage.getItem('user');
      info = JSON.parse(info);
      setUser(info);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('../../assets/images/background1.jpg')}
          resizeMode={'cover'}
        />
        <View style={styles.profile}>
          {user ? (
            <>
              <Image
                style={styles.imageprofile}
                source={{ uri: user.thumbnail }}
                resizeMode={'contain'}
              />
              <View
                style={{
                  justifyContent: 'space-between',
                  paddingVertical: 8,
                  paddingLeft: 10,
                }}
              >
                {user.fullName && (
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 18,
                      fontFamily: 'Linotte-SemiBold',
                    }}
                  >
                    {user.fullName}
                  </Text>
                )}
                <Text
                  numberOfLines={1}
                  style={{
                    color: colors.gray,
                    maxWidth: '80%',
                    fontFamily: 'Linotte-SemiBold',
                  }}
                >
                  {user.email}
                </Text>
              </View>
            </>
          ) : (
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontFamily: 'Linotte-Bold',
              }}
            >
              Bạn chưa đăng nhập
            </Text>
          )}
        </View>
      </View>
      <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
        {data.map(
          (element, index) =>
            (user || !element.lock) && <ItemSetting {...element} key={index} />
        )}
        {user ? (
          <ItemSetting
            icon='log-out-outline'
            title='Đăng xuất'
            onPress={async () => {
              await AsyncStorage.removeItem('user');
              ToastAndroid.show('Đăng xuất thành công', 2000);
              setUser(null);
            }}
          />
        ) : (
          <ItemSetting icon='log-in-outline' title='Đăng nhập' screen='Login' />
        )}
      </View>
    </View>
  );
}

const ItemSetting = ({ icon, screen, title, onPress }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <TouchableNativeFeedback
      onPress={() => {
        onPress ? onPress() : navigation.navigate(screen);
      }}
    >
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

export { Intro, Help, ChangeInfo };

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
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.card,
      marginHorizontal: 30,
      padding: 20,
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
