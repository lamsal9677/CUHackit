import MapView, { Marker } from "react-native-maps";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function GetMapView() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}></MapView>
    </View>
  );
}
const height_proportion = "40%";

const mapRegion = {
  latitude: 37.76825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    // width: Dimensions.get("window").width,
    width: Dimensions.get("window").width,

    // height: window.innerHeight,
    height: "100%",
  },
});
