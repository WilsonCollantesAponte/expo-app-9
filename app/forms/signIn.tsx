import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SignIn</Text>
    </View>
  );
};

export default SignIn;

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
