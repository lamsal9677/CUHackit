import Page1 from "./src/components/Page1";
import Page2 from "./src/components/Page2";
import Page3 from "./src/components/Page3";

import React from "react";
import { View, StyleSheet } from "react-native";

export default class App extends React.Component {
  state = {
    page: 1,
  };

  pickPageToRender = () => {
    if (this.state.page === 1) {
      return (
        <Page1 pageChange={(pageNum) => this.setState({ page: pageNum })} />
      );
    }
    if (this.state.page === 2) {
      return (
        <Page2 pageChange={(pageNum) => this.setState({ page: pageNum })} />
      );
    }
    if (this.state.page === 3) {
      return (
        <Page3 pageChange={(pageNum) => this.setState({ page: pageNum })} />
      );
    }
  };

  render() {
    return <View style={styles.container}>{this.pickPageToRender()}</View>;
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
