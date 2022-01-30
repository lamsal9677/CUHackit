import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";

import {
  Button,
  Platform,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";

export default function GetLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === "android" && !Constants.isDevice) {
        setErrorMsg(
          "Oops, this will not work on Snack in an Android emulator. Try it on your device!"
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  // console.log(location.coords.latitude)

  return (
    <View style={styles.container}>
      {/* <MapView style={styles.map} region={location.coords}></MapView> */}
      <Text style={styles.paragraph}>{text}</Text>
      <Text style={styles.paragraph}>Location</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});
