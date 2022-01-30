import MapView, { Marker } from "react-native-maps";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
// import { Marker } from "react-native-maps";

function log(eventName, e) {
  console.log(eventName, e.nativeEvent);
}
export default function GetMapView() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        <Marker coordinate={mapRegion} title="Marker" />
        <Marker coordinate={mapRegion1} title="Marker" />
        <Marker coordinate={mapRegion2} title="Marker" />
        <Marker
          coordinate={mapRegion3}
          onSelect={(e) => log("onSelect", e)}
          onDrag={(e) => log("onDrag", e)}
          onDragStart={(e) => log("onDragStart", e)}
          onDragEnd={(e) => log("onDragEnd", e)}
          onPress={(e) => log("onPress", e)}
          draggable
          title="Marker"
        />
      </MapView>
    </View>
  );
}

const mapRegion = {
  latitude: 37.76825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
const mapRegion1 = {
  latitude: 37.86825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
const mapRegion2 = {
  latitude: 37.66825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
const mapRegion3 = {
  latitude: 37.55835,
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
