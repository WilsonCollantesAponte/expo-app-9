import { Link, Slot } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function HomeLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Link href="/">
          <Feather name="home" size={24} color="black" />
        </Link>
        <Link href="/">
          <Entypo name="news" size={22} color="black" />
        </Link>
        <Link href="/">
          <MaterialIcons name="post-add" size={26} color="black" />
        </Link>
        <Link href="/">
          <Ionicons name="person-circle" size={24} color="black" />
        </Link>
        <Link href="/">
          <Entypo name="login" size={24} color="black" />
        </Link>
      </View>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ffffff",
    // backgroundColor: "#E11D48",
    backgroundColor: "#ee4c4c",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
