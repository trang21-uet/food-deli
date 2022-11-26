import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MyIcon from './MyIcon';
import { useTheme } from '@react-navigation/native';

export default function SearchBar({ style, placeholder }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.input} placeholder={placeholder} />
        <TouchableOpacity>
          <MyIcon name='search' size={25} color={'gray'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const getStyles = colors =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      margin: 10,
    },
    searchContainer: {
      flex: 1,
      flexDirection: 'row',
      borderRadius: 10,
      paddingHorizontal: 14,
      paddingVertical: 10,
      backgroundColor: 'white',
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    input: {
      flex: 1,
      fontSize: 16,
    },
  });
