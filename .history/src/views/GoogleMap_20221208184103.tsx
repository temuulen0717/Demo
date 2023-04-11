import React, {useRef, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { LatLng } from "react-native-maps";
import {
  GooglePlacesAutocomplete,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import COLORS from "../consts/color";
import { GOOGLE_API_KEY } from "./environments";
import Constants from "expo-constants";

import Geolocation from "@react-native-community/geolocation";
import Geocoder from "react-native-geocoding";
import MapViewDirections from "react-native-maps-directions";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 46.86511,
  longitude: 103.83478,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

type InputAutoCompleteProps = {
  label: string;
  placeholder: string;
  onPlaceSelected: (details: GooglePlaceDetail | null) => void;
};

function InputAutoComplete({
  label,
  placeholder,
  onPlaceSelected,
}: InputAutoCompleteProps) {
  return (
    <>
      <Text>{label}</Text>
      <GooglePlacesAutocomplete
        styles={{ textInput: style.input }}
        placeholder={placeholder || ""}
        fetchDetails
        onPress={(data, details = null) => {
          onPlaceSelected(details);
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: "pt-BR",
        }}
      />
    </>
  );
}

export default function GoogleMap() {
  const [origin, setOrigin] = useState<LatLng | null>();
  const [destination, SetDestination] = useState<LatLng | null>();
  const mapRef = useRef<MapView>(null);

  const moveTo = async (position: LatLng) => {
    const camera = await mapRef.current?.getCamera()
    if (camera) {
        camera.center= position;
        mapRef.current?.animateCamera(camera, {duration: 1000})
    }
  }
  const onPlaceSelected = (
    details: GooglePlaceDetail | null,
    flag: "origin" | "destination"
  ) => {
    const set = flag === "origin" ? setOrigin : SetDestination;
    const position = {
      latitude: details?.geometry.location.lat || 0,
      longitude: details?.geometry.location.lng || 0,
    };
    set(position);
    moveTo(position);
  };

  return (
    <View style={style.container}>
      <MapView
        ref={mapRef}
        style={style.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
      >
      {origin && <Marker coordinate={origin}/>}
      {destination && <Marker coordinate={destination}/>}

      <MapViewDirections
      origin={origin}
      destination={destination}
      apikey={GOOGLE_API_KEY}/>
      </MapView>
      <View style={style.searchContainer}>
        <InputAutoComplete
          label="Эхлэх"
          onPlaceSelected={(details) => {
            onPlaceSelected(details, "origin")
          }}
          placeholder={""}
        />
        <InputAutoComplete
          label="Дуусах"
          onPlaceSelected={(details) => {
            onPlaceSelected(details, "destination")
          }}
          placeholder={""}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.velvet,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  searchContainer: {
    position: "absolute",
    width: "90%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 10,
    top: Constants.statusBarHeight,
  },
  input: {
    borderColor: "#888",
    borderWidth: 1,
  },
});
