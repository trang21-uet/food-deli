import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../constants/Data';
import { useNavigation } from '@react-navigation/native';

const Item = ({ title, url, id }) => {
  const nav = useNavigation();

  return (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.8}
      onPress={() =>
        nav.navigate('SearchCategory', {
          id,
          name: title,
        })
      }
    >
      <View style={styles.itemContainerImage}>
        <Image source={url} style={styles.image} resizeMode='contain' />
      </View>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function Categories() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.containerListItem}>
        {CATEGORIES.slice(0, 4).map(item => (
          <Item key={item.id} {...item} />
        ))}
      </View>
      <View style={styles.containerListItem}>
        {CATEGORIES.slice(4).map(item => (
          <Item key={item.id} {...item} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerListItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  label: {
    color: 'black',
    marginTop: 5,
    fontFamily: 'Linotte-SemiBold',
  },
  image: {
    height: 40,
    width: 40,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 5,
  },
  itemContainerImage: {
    height: 55,
    width: 55,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
