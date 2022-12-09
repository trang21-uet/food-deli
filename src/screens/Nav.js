import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { MyIcon } from '../components';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useNav } from '../providers';

const screens = [
  { icon: 'home', screen: 'Home', label: 'Trang chủ' },
  { icon: 'restaurant', screen: 'RestaurantList', label: 'Quán ăn' },
  { icon: 'cart', screen: 'Cart', label: 'Giỏ hàng' },
  { icon: 'gift', screen: 'CouponList', label: 'Khuyến mãi' },
  { icon: 'person', screen: 'Settings', label: 'Cài đặt' },
];

export default function Nav() {
  const theme = useTheme();
  const styles = getStyles(theme.colors);

  return (
    <View style={styles.nav}>
      {screens.map((item, index) => (
        <NavButton {...item} key={index} />
      ))}
    </View>
  );
}

const NavButton = ({ icon, screen, label }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const nav = useNavigation();
  const navbar = useNav();
  const isFocus = navbar.screen == screen;

  return (
    <View style={styles.button}>
      <TouchableOpacity
        onPress={() => {
          navbar.setScreen(screen);
          nav.navigate(screen);
        }}
        disabled={isFocus}
      >
        <MyIcon
          size={25}
          name={icon}
          outline={!isFocus}
          color={isFocus ? colors.primary : colors.text}
          style={{ paddingHorizontal: 15 }}
        />
      </TouchableOpacity>

      <Text
        style={[
          styles.label,
          {
            display: isFocus ? 'flex' : 'none',
          },
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

const getStyles = colors =>
  StyleSheet.create({
    nav: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: colors.card,
      paddingVertical: 10,
    },
    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      color: colors.primary,
      fontSize: 13,
      fontFamily: 'Linotte-SemiBold',
    },
  });
