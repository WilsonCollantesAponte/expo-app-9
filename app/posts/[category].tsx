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
  // console.log(posts[0].image[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Category {pathname}</Text>
      {!isLoading ? (
        <FlatList
          style={styles.flatList}
          data={posts.slice(0, 1)}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.text1}>{item.title}</Text>
              <Image style={styles.image} source={{ uri: item.image[0] }} />
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
  text1: {
    fontSize: 20,
    fontStyle: "italic",
    color: "white",
  },
  flatList: {
    backgroundColor: "blue",
    width: "90%",
  },
  image: {
    width: "100%",
    height: "1000%",
  },
});
