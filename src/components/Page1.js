import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Button,
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
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            title="Go to page 2"
            onPress={() => this.props.pageChange(2)}
          />
        </View>

        <View
          style={{
            backgroundColor: "red",
            flex: 1,
            alignItems: "center",
          }}
        >
          <GetLocation style={{}} />
          <Button
            title="Go to page 2"
            onPress={() => this.props.pageChange(2)}
          />
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
