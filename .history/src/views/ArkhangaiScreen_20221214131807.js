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
import places from "../consts/places";
const { width } = Dimensions.get("screen");

const ArkhangaiScreen = ({ navigation }) => {
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
      onPress={() => navigation.navigate("ProvincesScreen")} />,
    <Material name="heart" size={25} color={COLORS.velvet} />,
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
  const Card = ({ place }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("DetailsScreen", place)}
      >
        <ImageBackground style={style.cardImage} source={place.image}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            {place.name}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Icon name="place" size={20} color={COLORS.white} />
              <Text style={{ marginLeft: 5, color: COLORS.white }}>
                {place.location}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Material name="heart" size={20} color={COLORS.white} />
              <Text style={{ marginLeft: 5, color: COLORS.white }}>5.0</Text>
            </View>
          </View>
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
        <Material
          name="user-alt"
          size={24}
          color={COLORS.white}
          onPress={() => navigation.navigate("Profile")}
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
        <Text style={style.sectionTitle}>Архангай</Text>
        <View>
          <FlatList
            contentContainerStyle={{ paddingLeft: 20 }}
            vertical
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({ item }) => <Card place={item} />}
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
    width: width -40,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
    marginTop: 15,
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
  },
});
export default ArkhangaiScreen;
