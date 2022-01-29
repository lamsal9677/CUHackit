import GetLocation from "./src/GetLocation";
import React from "react";
import { Alert, Button, View, StyleSheet, SafeAreaView } from "react-native";

export default function App() {
  return (
<<<<<<< HEAD
    <SafeAreaView style={styles.container}>
      <Button
        title="hellso"
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      />
      <GetLocation />
      <GetLocation />
    </SafeAreaView>
=======
    <View style={styles.container}>
      <Text>Hello World!!!</Text>
      <StatusBar style="auto" />
    </View>
>>>>>>> 3e094870789b9f456f2e797d353902f18e92b41d
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
