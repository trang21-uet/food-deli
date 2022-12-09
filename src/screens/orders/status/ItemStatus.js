import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MyIcon } from '../../../components';
export const windowWidth = Dimensions.get('window').width;

const ItemStatus = ({ title, description, active, time }) => {
  return (
    <View
      style={
        active === false
          ? styles.container
          : { ...styles.container, borderColor: '#69c157' }
      }
    >
      <View style={styles.row}>
        <View>
          <View
            style={{
              backgroundColor: 'white',
              height: 10,
              width: 10,
              top: 5,
              left: 5,
              borderRadius: 5,
              position: 'absolute',
            }}
          ></View>
          <MyIcon
            style={{ marginVertical: 5 }}
            size={20}
            color={active == true ? '#69c157' : '#b6b5b1'}
            name='md-checkmark-circle-sharp'
          />
        </View>
        <View style={{ paddingLeft: 10, maxWidth: '90%' }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <View style={{ right: 0, position: 'absolute', top: -10 }}>
        <Text style={styles.description}>10:00 PM</Text>
      </View>
    </View>
  );
};

export default ItemStatus;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    borderLeftWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#b6b5b1',
  },
  row: {
    position: 'absolute',
    flexDirection: 'row',
    width: windowWidth - 100,
    top: -10,
    left: -10,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Linotte-SemiBold',
  },
  description: {
    color: 'gray',
    fontSize: 13,
  },
});
