import { ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ItemOrder from './ItemOrder';
import { host } from '../../../constants/Data';
import { Loading } from '../../../components';

function OnGoingScreen({ data }) {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}
    >
      {data.map((item, index) => (
        <ItemOrder key={index} {...item} />
      ))}
    </ScrollView>
  );
}

function CompletedScreen({ data }) {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}
    >
      {data.map((item, index) => (
        <ItemOrder key={index} {...item} />
      ))}
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
      // console.log(json);

      setOngoing(json.filter(item => item.status.id < 7));
      setDone(json.filter(item => item.status.id === 7));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
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
      <Tab.Screen name='Đang xử lý'>
        {() => <OnGoingScreen data={ongoing} />}
      </Tab.Screen>
      <Tab.Screen name='Hoàn thành'>
        {() => <CompletedScreen data={done} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
