import { Slot } from "expo-router";
import { StyleSheet, View, Text } from "react-native";

export default function HomeLayout() {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    // alignItems: "center",
    // justifyContent: "center",
    // padding: 0,
    // margin: 0,
  },
});
