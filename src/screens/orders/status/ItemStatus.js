import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { MyIcon } from '../../../components';
import { Datediff } from '../../../constants/function';
export const windowWidth = Dimensions.get('window').width;

const ItemStatus = ({ status, time, active }) => {
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
            color={active ? '#69c157' : '#b6b5b1'}
            name='md-checkmark-circle-sharp'
          />
        </View>
        <View style={{ paddingLeft: 10, maxWidth: '90%' }}>
          <Text style={styles.title}>{status.name}</Text>
          <Text style={styles.description}>{status.description}</Text>
        </View>
      </View>
      {time && (
        <View style={{ right: 0, position: 'absolute', top: -8 }}>
          <Text style={styles.description}>{Datediff(time)}</Text>
        </View>
      )}
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
