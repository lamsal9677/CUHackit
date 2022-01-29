import GetLocation from "./src/GetLocation";
import React from "react";
import { Alert, Button, View, StyleSheet, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="hellso"
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      />
      <GetLocation />
      <GetLocation />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
