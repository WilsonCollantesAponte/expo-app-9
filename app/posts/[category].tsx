import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { usePathname } from "expo-router";

interface postDetail {
  idUser: string;
  User: User;
  idPost: string;
  Post: Post;
  iLove: Boolean;
  iLike: Boolean;
}

interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  headquarter: string;
  cycle: string;
  carrer: string;
  Access: any;
  postDetail: postDetail[];
}

interface Post {
  id: string;
  title: string;
  description: string;
  image: any;
  postDetail: Array<postDetail>;
  // postDetail: postDetail[];
  postScope: any;
}

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
        // posts.map((post, index) => (
        //   <View key={index}>
        //     <Text style={styles.text1}>{post.title}</Text>
        //   </View>
        // ))
        <FlatList
          style={styles.flatList}
          data={posts}
          renderItem={({ item }) => (
            <Text style={styles.text1}>{item.title}</Text>
          )}
          keyExtractor={(item) => String(item.id)}
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
  },
});
