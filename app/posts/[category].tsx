import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { usePathname } from "expo-router";

const Category = () => {
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Category {pathname}</Text>
    </View>
  );
};

export default Category;

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
