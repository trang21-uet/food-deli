import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const CategoriesBar = ({ listItem, categoryActive, changeCategory }) => {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {listItem.map(({ title }, index) => (
        <TouchableOpacity
          activeOpacity={0.4}
          disabled={categoryActive === index}
          onPress={() => changeCategory(index)}
          key={index}
        >
          <View
            style={[styles.item, categoryActive === index && styles.itemActive]}
          >
            <Text style={styles.label}>{title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
export default CategoriesBar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  item: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  itemActive: {
    borderBottomWidth: 3,
    borderColor: '#FF4E3C',
  },
  label: {
    fontSize: 16,
  },
});
