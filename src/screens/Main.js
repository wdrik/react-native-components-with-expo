import React from "react";
import { StyleSheet, View } from "react-native";

import FabButton from "../components/FabButtom";

export default function Main() {
  return (
    <View style={styles.container}>
      <FabButton style={{ bottom: 80, right: 60 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
