import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";
import Constants from "expo-constants";
import UserPass from "../UserPass";

export default class Page2 extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            backgroundColor: "gold",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            title="Go to page 3"
            onPress={() => this.props.pageChange(3)}
          />
        </View>

        <View
          style={{
            backgroundColor: "red",
            flex: 1,
            alignItems: "center",
          }}
        ></View>
        <UserPass />
        <View
          style={{
            backgroundColor: "blue",
            flex: 1,
            alignItems: "center",
          }}
        ></View>
        {/* <GetLocation style={styles.Loc} />
      <Reported style={styles.Rep} /> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
