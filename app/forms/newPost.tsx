import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NewPost = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>NewPost</Text>
    </View>
  );
};

export default NewPost;

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
