import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f3f46",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
