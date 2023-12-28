import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Slot, usePathname } from "expo-router";

const Layout = () => {
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Link
          style={
            pathname === "/posts/architecture" ? styles.text1 : styles.text2
          }
          href="/posts/architecture"
        >
          Architecture
        </Link>
        <Link
          style={pathname === "/posts/civil" ? styles.text1 : styles.text2}
          href="/posts/civil"
        >
          Civil
        </Link>
        <Link
          style={pathname === "/posts/systems" ? styles.text1 : styles.text2}
          href="/posts/systems"
        >
          Systems
        </Link>
        <Link
          style={pathname === "/posts/all" ? styles.text1 : styles.text2}
          href="/posts/all"
        >
          All
        </Link>
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
  text1: {
    color: "white",
  },
  text2: {
    color: "black",
  },
});
