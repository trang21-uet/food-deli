import { ScrollView } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ItemOrder from './ItemOrder';

function OnGoingScreen() {
  return (
    <ScrollView style={{ paddingHorizontal: 10 }}>
      <ItemOrder />
      <ItemOrder />
      <ItemOrder />
      <ItemOrder />
      <ItemOrder />
      <ItemOrder />
      <ItemOrder />
      <ItemOrder />
    </ScrollView>
  );
}

function CompletedScreen() {
  return (
    <ScrollView style={{ paddingHorizontal: 10 }}>
      <ItemOrder />
      <ItemOrder />
      <ItemOrder />
      <ItemOrder />
      <ItemOrder />
    </ScrollView>
  );
}
const Tab = createMaterialTopTabNavigator();

export default function OrderManagement() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontFamily: 'Linotte-SemiBold', fontSize: 16 },
      }}
    >
      <Tab.Screen name='Đang giao' component={OnGoingScreen} />
      <Tab.Screen name='Hoàn thành' component={CompletedScreen} />
    </Tab.Navigator>
  );
}
