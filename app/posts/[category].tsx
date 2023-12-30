import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { usePathname } from "expo-router";
import { Post } from "../../types/main";

const Category = () => {
  const pathname = usePathname();

  const [posts, setPosts] = useState<Array<Post>>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    fetch("https://utp-app.vercel.app/post/posts/api?idUser=&category=all")
      .then((r) => r.json())
      .then((r) => setPosts(r))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Category {pathname}</Text>
      {!isLoading ? (
        <FlatList
          style={styles.flatList}
          data={posts}
          renderItem={({ item }) => (
            <View style={styles.mainContainerInFlatList}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Image style={styles.image} source={{ uri: item.image[0] }} />
              <Text style={styles.descriptionText}>{item.description}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.text}>Loading...</Text>
      )}
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
  titleText: {
    fontSize: 20,
    fontStyle: "italic",
    color: "white",
    paddingLeft: "5.5%",
    paddingBottom: "1.5%",
  },
  descriptionText: {
    fontSize: 15,
    fontStyle: "italic",
    color: "white",
    paddingLeft: "5.5%",
    paddingTop: "1.5%",
  },
  flatList: {
    marginTop: "10%",
    width: "90%",
  },
  image: {
    height: "500%",
    width: "100%",
    borderRadius: 12.5,
  },
  mainContainerInFlatList: {
    flex: 1,
    // display: "flex",
    height: 1000,
    marginBottom: 340,
    // backgroundColor: "red",
    padding: 10,
  },
});
