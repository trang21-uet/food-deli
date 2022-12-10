import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import MyIcon from './MyIcon';
import { useNavigation, useTheme } from '@react-navigation/native';

const ButtonAll = ({ title, id }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          nav.navigate('SearchCategory', {
            id: 9,
            name: title,
          })
        }
      >
        <MyIcon size={25} name={'arrow-forward'} />
      </TouchableOpacity>
    </View>
  );
};

const getStyles = colors =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    label: {
      fontSize: 18,
      borderBottomWidth: 2,
      borderColor: '#fc795d',
      marginLeft: 15,
      fontFamily: 'Linotte-Bold',
    },
    button: {
      flexDirection: 'row',
      backgroundColor: 'white',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6,
      alignItems: 'center',
      justifyContent: 'center',
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
export default ButtonAll;
