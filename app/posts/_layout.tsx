import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const Layout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text>Architecture</Text>
        <Text>Civil</Text>
        <Text>Industrial</Text>
        <Text>Systems</Text>
        <Text>All</Text>
      </View>
      <Slot />
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4511e",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: "white",
    borderBottomWidth: 2.5,
  },
  text: {
    color: "white",
  },
});
