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
              <Image
                style={styles.image}
                source={{
                  uri:
                    item.image[0] ||
                    "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg",
                }}
              />
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
    paddingHorizontal: "2.5%",
  },
  image: {
    height: 250,
    width: "100%",
    borderRadius: 15,
  },
  mainContainerInFlatList: {
    backgroundColor: "#5c657c",
    borderRadius: 15,
    marginVertical: 15,
    padding: 10,
  },
});
