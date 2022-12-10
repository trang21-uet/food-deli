import { ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ItemOrder from './ItemOrder';
import { host } from '../../../constants/Data';
import { Loading } from '../../../components';

function OnGoingScreen({ data }) {
  return (
    <ScrollView style={{ paddingHorizontal: 10 }}>
      {data.map((item, index) => (
        <ItemOrder key={index} {...item} />
      ))}
    </ScrollView>
  );
}

function CompletedScreen() {
  return (
    <ScrollView style={{ paddingHorizontal: 10 }}>
      {/* <ItemOrder />
      <ItemOrder />
      <ItemOrder />
      <ItemOrder />
      <ItemOrder /> */}
    </ScrollView>
  );
}
const Tab = createMaterialTopTabNavigator();

export default function OrderManagement() {
  const [ongoing, setOngoing] = useState([]);
  const [done, setDone] = useState([]);
  const [loading, setLoading] = useState(true);

  const request = async () => {
    try {
      const response = await fetch(host + '/api/orders');
      const json = await response.json();

      setOngoing(json.filter(item => item.state === 'Chờ xác nhận'));
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    request();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontFamily: 'Linotte-SemiBold', fontSize: 16 },
      }}
    >
      <Tab.Screen name='Đang giao'>
        {() => <OnGoingScreen data={ongoing} />}
      </Tab.Screen>
      <Tab.Screen name='Hoàn thành' component={CompletedScreen} />
    </Tab.Navigator>
  );
}
