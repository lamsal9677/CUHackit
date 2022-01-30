import GetMapView from "./GetMapView";
import React from "react";
import { View, StyleSheet } from "react-native";

export default function Reported() {
  return (
    <View style={styles}>
      <GetMapView />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
});
