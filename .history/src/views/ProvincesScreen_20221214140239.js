import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Material from "react-native-vector-icons/FontAwesome5";
import COLORS from "../../src/consts/color";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import provinces from "../consts/provinces";
const { width } = Dimensions.get("screen");

const ProvincesScreen = ({ navigation }) => {
  const categoryIcons = [
    <Icon
      name="home"
      size={25}
      color={COLORS.velvet}
      onPress={() => navigation.navigate("OnboardScreen")}
    />,
    <Icon
      name="place"
      size={25}
      color={COLORS.velvet}
      onPress={() => navigation.navigate("GoogleMap")}
    />,
    <Icon 
      name="list-alt" 
      size={25} 
      color={COLORS.velvet}
      onPress={() => navigation.navigate("Plan")} />,
    <Icon name="menu-book" size={25} color={COLORS.velvet} onPress={() => navigation.navigate("ProvincesScreen")}/>,
  ];
  const ListCategories = () => {
    return (
      <View style={style.categoryContainer}>
        {categoryIcons.map((icon, index) => (
          <View key={index} style={style.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
    );
  };
  const ProvinceCard = ({ province }) => {
    return (
      <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate(province.screen)}
          >

        <ImageBackground style={style.rmCardImage} source={province.image}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 22,
              fontWeight: "bold",
              textAlign: 'center',
              padding: 20,
            }}
          >
            {province.name}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent={false} backgroundColor={COLORS.velvet} />
      <View style={style.header}>
        <Icon name="sort" size={28} color={COLORS.white} />
        <Material
          name="briefcase-medical"
          size={24}
          color={COLORS.white}
          onPress={() => navigation.navigate("Medicine")}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLORS.velvet,
            height: 120,
            paddingHorizontal: 20,
          }}
        >
          <View>
            <Text style={style.headerTitle}>Байгалийн үзэсгэлэнт </Text>
            <Text style={style.headerTitle}>газаруудаас хайх</Text>
            <View style={style.inputContainer}>
              <Icon name="search" size={28} />
              <TextInput
                placeholder="Хайх газараа оруулна уу"
                style={{ color: COLORS.grey }}
              />
            </View>
          </View>
        </View>
        <ListCategories />
        <View>
          <Text style={style.sectionTitle}>Аймгууд</Text>
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20, }}
            showsHorizontalScrollIndicator={false}
            vertical
            data={provinces}
            renderItem={({ item }) => <ProvinceCard province={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.velvet,
  },
  nextHeader: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.velvet,
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 23,
  },
  inputContainer: {
    height: 60,
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 13,
    position: "absolute",
    top: 90,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    elevation: 12,
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
  },
  rmCardImage: {
    width: width - 40,
    height: 100,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
    marginTop: 15,
  },
});
export default ProvincesScreen;
