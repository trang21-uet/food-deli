import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Rating from './Rating';

export const windowWidth = Dimensions.get('window').width;

const TextField = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Đánh giá sản phẩm</Text>
      <Rating />
      <TextInput
        multiline
        numberOfLines={5}
        style={styles.textField}
        placeholder='Viết đánh giá...'
      />
      <TouchableOpacity style={styles.btn}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
          }}
        >
          ĐÁNH GIÁ
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default class Review extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => this.RBSheet.open()}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 16,
            }}
          >
            ĐÁNH GIÁ
          </Text>
        </TouchableOpacity>
        <RBSheet
          closeOnDragDown={true}
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          openDuration={250}
        >
          <TextField />
        </RBSheet>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textField: {
    borderColor: '#b6b5b1',
    borderRadius: 5,
    textAlignVertical: 'top',
    padding: 10,
    width: windowWidth - 50,
    borderWidth: 1,
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
  },
  btn: {
    width: windowWidth - 50,
    padding: 10,
    backgroundColor: '#FF4E3C',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  btn2: {
    backgroundColor: '#FF4E3C',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 8,
  },
});
