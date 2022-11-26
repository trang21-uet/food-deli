import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import React from 'react';
import { MyIcon, Pill } from '../components';
import { useNavigation, useTheme } from '@react-navigation/native';

export default function Nav() {
  const theme = useTheme();
  const styles = getStyles(theme.colors);

  return (
    <View style={styles.nav}>
      <NavButton icon='home' screen='Home' />
      <NavButton icon='restaurant' screen='RestaurantList' />
      <NavButton icon='cart' screen='Cart' />
      <NavButton icon='gift' screen='CouponList' />
      <NavButton icon='person' screen='Login' />
    </View>
  );
}

const NavButton = ({ icon, screen }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const nav = useNavigation();
  return (
    <Pill
      borderRadius={20}
      onPress={() => nav.navigate(screen)}
      style={styles.button}
      noShadow
      ripple={colors.primary}
    >
      <MyIcon
        size={25}
        name={icon}
        outline
        color={colors.text}
        style={{ padding: 10 }}
      />
    </Pill>
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
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      height: 70,
    },
    button: {
      borderRadius: 20,
      overflow: 'hidden',
    },
  });
