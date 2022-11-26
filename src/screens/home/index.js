import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Button,
} from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import Banner from "../../components/Banner";
import SearchBar from "../../components/SearchBar";
import Categories from "../../components/Categories";
import ItemDish from "../../components/ItemDish";
import ItemDish2 from "../../components/ItemDish2";
import ButtonAll from "../../components/ButtonAll";
export default function Home({ navigation }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <ScrollView style={{ flex: 1 }}>
      <Banner />
      <SearchBar
        placeholder='Tìm kiếm món ăn...'
        style={{ marginTop: -26, paddingHorizontal: 20 }}
      />
      <Categories />
      <View style={{ marginVertical: 10 }}>
        <AllButton title={'Bán chạy nhất'} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ItemDish navigation={navigation} />
          <ItemDish />
          <ItemDish />
          <ItemDish />
          <ItemDish />
        </ScrollView>
      </View>
      <View style={{ marginVertical: 10 }}>
        <AllButton title={'Mới nhất'} />
        <FlatList
          data={[1, 2, 2, 2]}
          numColumns={2}
          renderItem={({ item, index }) => {
            const lastItem = index === 5;
            return (
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: 5,
                  maxWidth: lastItem ? '50%' : '100%',
                }}
              >
                <VerticalDish />
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
}

const AllButton = ({ title }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={styles.row}>
      <Text style={styles.name}>{title}</Text>
      <View
        style={{
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(colors.gray, true)}
        >
          <View style={styles.button}>
            <Text style={{ color: colors.gray }}>All </Text>
            <MyIcon size={20} color={colors.gray} name={'arrow-forward'} />
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const getStyles = colors =>
  StyleSheet.create({
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 15,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.white,
      paddingStart: 20,
      paddingEnd: 10,
      paddingVertical: 10,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
    },
  });
