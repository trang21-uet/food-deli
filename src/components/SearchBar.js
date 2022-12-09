import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import MyIcon from './MyIcon';
import { useTheme } from '@react-navigation/native';

export default function SearchBar({ title }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={title} />
      <MyIcon name='search' size={25} color={colors.gray} />
    </View>
  );
}
const getStyles = colors =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: 30,
      marginTop: 20,
      marginBottom: 15,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
      backgroundColor: colors.card,
      shadowColor: '#000',
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
      fontFamily: 'Linotte',
      marginTop: -4,
      backgroundColor: colors.card,
    },
  });
