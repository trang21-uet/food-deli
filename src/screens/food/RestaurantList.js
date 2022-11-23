import { ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { Pill, Restaurant } from '../../components';

const data = [
  {
    category: 'All',
    items: [
      {
        name: 'Nhất quán',
        description: 'Quán ăn sinh viên',
        distance: 3,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg',
        rating: 5,
      },
      {
        name: 'Mì trộn các kiểu',
        description: 'Mì trộn',
        distance: 1,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg',
        rating: 3,
      },
      {
        name: 'Bún đậu pro vjp',
        description: 'Bún đậu mắm tôm',
        distance: 2,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg',
        rating: 1,
      },
      {
        name: 'Phở bò các kiểu',
        description: 'Phở bò',
        distance: 0.2,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg',
        rating: 2,
      },
      {
        name: 'Bún real cua',
        description: 'Riel',
        distance: 4,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg',
        rating: 4,
      },
    ],
  },
  {
    category: 'Ăn vặt',
    items: [
      {
        name: 'Mì trộn các kiểu',
        description: 'Mì trộn',
        distance: 1,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg',
        rating: 3,
      },
      {
        name: 'Nhất quán',
        description: 'Quán ăn sinh viên',
        distance: 3,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg',
        rating: 5,
      },
      {
        name: 'Bún đậu pro vjp',
        description: 'Bún đậu mắm tôm',
        distance: 2,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg',
        rating: 1,
      },
      {
        name: 'Phở bò các kiểu',
        description: 'Phở bò',
        distance: 0.2,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg',
        rating: 2,
      },
      {
        name: 'Bún real cua',
        description: 'Riel',
        distance: 4,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg',
        rating: 4,
      },
    ],
  },
  {
    category: 'Cơm',
    items: [
      {
        name: 'Nhất quán',
        description: 'Quán ăn sinh viên',
        distance: 3,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg',
        rating: 5,
      },
      {
        name: 'Mì trộn các kiểu',
        description: 'Mì trộn',
        distance: 1,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg',
        rating: 3,
      },
      {
        name: 'Phở bò các kiểu',
        description: 'Phở bò',
        distance: 0.2,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg',
        rating: 2,
      },
      {
        name: 'Bún real cua',
        description: 'Riel',
        distance: 4,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg',
        rating: 4,
      },
      {
        name: 'Bún đậu pro vjp',
        description: 'Bún đậu mắm tôm',
        distance: 2,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg',
        rating: 1,
      },
    ],
  },
  {
    category: 'Bún/Phở',
    items: [
      {
        name: 'Nhất quán',
        description: 'Quán ăn sinh viên',
        distance: 3,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg',
        rating: 5,
      },
      {
        name: 'Mì trộn các kiểu',
        description: 'Mì trộn',
        distance: 1,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg',
        rating: 3,
      },
      {
        name: 'Bún đậu pro vjp',
        description: 'Bún đậu mắm tôm',
        distance: 2,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg',
        rating: 1,
      },
      {
        name: 'Phở bò các kiểu',
        description: 'Phở bò',
        distance: 0.2,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg',
        rating: 2,
      },
      {
        name: 'Bún real cua',
        description: 'Riel',
        distance: 4,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg',
        rating: 4,
      },
    ],
  },
];

export default function RestaurantList() {
  const { colors } = useTheme();
  const [selected, setSelected] = useState('All');
  const [items, setItems] = useState(data[0].items);

  useEffect(() => {
    data.forEach(d => d.category == selected && setItems(d.items));
  });

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map(res => (
            <Pill
              key={res.category}
              borderRadius={15}
              marginHorizontal={10}
              marginVertical={5}
              onPress={() => setSelected(res.category)}
              ripple={colors.primary}
              style={{
                paddingHorizontal: 15,
                paddingVertical: 10,
                backgroundColor:
                  res.category == selected ? colors.primary : colors.white,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: res.category == selected ? colors.white : colors.text,
                }}
              >
                {res.category}
              </Text>
            </Pill>
          ))}
        </ScrollView>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginVertical: 10,
          marginStart: 20,
        }}
      >
        Nhà hàng
      </Text>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 20 }}>
          {items.map((item, index) => (
            <Restaurant key={index} {...item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
