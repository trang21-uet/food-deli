import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '@react-navigation/native';
import React, { Component, useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { MyButton } from '../../../../components';
import { host } from '../../../../constants/Data';
import Rating from './Rating';

export const windowWidth = Dimensions.get('window').width;

const TextField = ({ id, onSubmit }) => {
  const [message, setMessage] = useState('');
  const [rate, setRate] = useState(1);
  const [user, setUser] = useState();

  const getUser = async () => {
    const info = await AsyncStorage.getItem('user');
    setUser(JSON.parse(info));
  };

  useEffect(() => {
    getUser();
  }, []);

  const request = async () => {
    try {
      const response = await fetch(host + '/api/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          orderId: id,
          rate: rate,
          userId: user.userId,
        }),
      });
      const json = await response.text();
      ToastAndroid.show('Đánh giá thành công');
      console.log(json);
    } catch (error) {}
  };

  return (
    <View style={[styles.container, { marginHorizontal: 10 }]}>
      <Text style={styles.header}>Đánh giá sản phẩm</Text>
      <Rating rate={rate} setRate={setRate} />
      <TextInput
        multiline
        numberOfLines={5}
        value={message}
        onChangeText={text => setMessage(text)}
        style={styles.textField}
        placeholder='Viết đánh giá...'
      />
      <MyButton
        style={styles.btn}
        title='Ghi nhận'
        textStyle={{
          color: 'white',
          fontSize: 16,
          textTransform: 'uppercase',
          fontFamily: 'Linotte-SemiBold',
        }}
        onPress={async () => {
          await request();
          onSubmit();
        }}
      />
    </View>
  );
};

export default class Review extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <MyButton
          style={styles.btn}
          title='Đánh giá'
          textStyle={{
            color: 'white',
            fontSize: 16,
            textTransform: 'uppercase',
            fontFamily: 'Linotte-SemiBold',
          }}
          onPress={() => this.RBSheet.open()}
        />
        <RBSheet
          closeOnDragDown={true}
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={320}
          openDuration={250}
        >
          <TextField
            id={this.props.id}
            onSubmit={() => {
              navigation.navigate('Home');
              this.RBSheet.close();
            }}
          />
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
    fontFamily: 'Linotte',
    fontSize: 16,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
  },
  btn: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 13,
    backgroundColor: '#fd7a5c',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
