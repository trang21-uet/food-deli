import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import React from 'react';
import { MyIcon } from '../components';
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
    <View style={styles.button}>
      <TouchableNativeFeedback
        onPress={() => nav.navigate(screen)}
        background={TouchableNativeFeedback.Ripple(colors.primary, true)}
      >
        <View style={{ padding: 15 }}>
          <MyIcon size={25} name={icon} outline color={colors.text} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const getStyles = colors =>
  StyleSheet.create({
    nav: {
      width: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      flex: 1,
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
