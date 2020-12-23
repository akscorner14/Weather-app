import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View>
      <Text style={styles.header}>Weather App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    paddingVertical: 20,
    textAlign: "center",
  },
});
