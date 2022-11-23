import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Pill } from '../../components';
import { CATEGORIES } from '../../constants/Data';

const Item = props => (
  <View
    style={{
      flexDirection: 'column',
      alignItems: 'center',
      marginVertical: 10,
    }}
  >
    <Pill borderRadius={15} style={styles.item}>
      <Image source={props.style.url} style={styles.image} />
    </Pill>
    <Text style={styles.title}>{props.style.title}</Text>
  </View>
);

const Categories = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <View style={styles.container}>
      <View style={styles.containerListItem}>
        {CATEGORIES.slice(0, 4).map(item => (
          <Item key={item.id} style={item} />
        ))}
      </View>
      <View style={styles.containerListItem}>
        {CATEGORIES.slice(4).map(item => (
          <Item key={item.id} style={item} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerListItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    marginTop: 5,
  },
  image: {
    height: 40,
    width: 40,
  },
  item: {
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  itemContainerImage: {},
});

export default Categories;
