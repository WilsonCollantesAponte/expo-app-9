import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const Layout = () => {
  return (
    <View style={styles.container}>
      <Text>Layout</Text>
      <Text>Layout</Text>
      <Text>Layout</Text>
      <Text>Layout</Text>
      <Text>Layout</Text>
      <Text>Layout</Text>
      <Text>Layout</Text>
      <Text>Layout</Text>
      <Text>Layout</Text>
      <Text>Layout</Text>
      <Text>Layout</Text>
      <Text>Layout</Text>
      <Text>Layout</Text>
      <Text>Layout</Text>
      <Text>Layout</Text>
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
    paddingVertical: 6,
  },
});
