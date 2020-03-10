import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import FabButton from "../../components/FabButton";

import styles from "./styles";

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>sectionTitle</Text>
      </View>

      <FabButton style={{ bottom: 80, right: 60 }} />
    </SafeAreaView>
  );
}
