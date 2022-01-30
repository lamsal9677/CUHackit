import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import GetLocation from "../GetLocation";
import Reported from "../Reported";

export default class Page1 extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            backgroundColor: "gold",
            flex: 1,
          }}
        ></View>
        <TouchableOpacity onPress={() => this.props.pageChange(2)}>
          <Text>Go to page 2</Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: "red",
            flex: 1,
            alignItems: "center",
          }}
        >
          <GetLocation style={{}} />
        </View>
        <View
          style={{
            backgroundColor: "blue",
            flex: 1,
            alignItems: "center",
          }}
        >
          <Reported style={{}} />
        </View>
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

  btn: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Loc: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Rep: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
