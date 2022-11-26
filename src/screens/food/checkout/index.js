import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { MyIcon } from '../../../components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useTheme } from '@react-navigation/native';
import Checkout from './Checkout';
import Recipient from './Reciepient';
import Address from './Address';
import Payment from './Payment';

const Tab = createNativeStackNavigator();

export default function CheckoutScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName='Checkout'
        screenOptions={{
          header: () => <CheckoutHeader />,
          animation: 'slide_from_right',
        }}
      >
        <Tab.Screen name='Checkout' component={Checkout} />
        <Tab.Screen name='Recipient' component={Recipient} />
        <Tab.Screen name='Address' component={Address} />
        <Tab.Screen name='Payment' component={Payment} />
      </Tab.Navigator>
    </View>
  );
}

const CheckoutHeader = () => {
  const { colors } = useTheme();
  const nav = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        padding: 15,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.card,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <TouchableOpacity onPress={nav.goBack}>
        <MyIcon size={25} name='chevron-back' />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: '500' }}>Thanh toán</Text>
      <MyIcon color={colors.card} size={25} />
    </View>
  );
};
