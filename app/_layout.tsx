import { Link, Slot, usePathname } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Constants from "expo-constants";

export default function HomeLayout() {
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Link href="/">
          <Feather
            name="home"
            size={24}
            color={`${pathname === "/" ? "white" : "black"}`}
          />
        </Link>
        <Link href="/posts/systemsEngineering">
          <Entypo
            name="news"
            size={22}
            color={`${pathname.split("/")[1] === "posts" ? "white" : "black"}`}
          />
        </Link>
        <Link href="/forms/newPost">
          <MaterialIcons
            name="post-add"
            size={26}
            color={`${pathname === "/forms/newPost" ? "white" : "black"}`}
          />
        </Link>
        <Link href="/forms/signIn">
          <Ionicons
            name="person-circle"
            size={24}
            color={`${pathname === "/forms/signIn" ? "white" : "black"}`}
          />
        </Link>
        <Link href="/forms/login">
          <Entypo
            name="login"
            size={24}
            color={`${pathname === "/forms/login" ? "white" : "black"}`}
          />
        </Link>
      </View>
      <Slot />
    </View>
    // <Stack
    //   // https://reactnavigation.org/docs/headers#sharing-common-options-across-screens
    //   screenOptions={{
    //     headerStyle: {
    //       backgroundColor: "#f4511e",
    //     },
    //     headerTintColor: "#fff",
    //     headerTitleStyle: {
    //       fontWeight: "bold",
    //     },
    //   }}
    // >
    //   {/* Optionally configure static options outside the route. */}
    //   <Stack.Screen name="home" options={{}} />
    // </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#f4511e",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 6,
  },
});
