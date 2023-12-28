import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { usePathname } from "expo-router";

interface postDetail {
  // id     String   @id @default(uuid())
  idUser: String;
  User: User;
  idPost: String;
  Post: Post;
  iLove: Boolean;
  iLike: Boolean;
}

interface User {
  id: String;
  name: String;
  surname: String;
  email: String;
  password: String;
  headquarter: String;
  cycle: String;
  carrer: String;
  Access: any;
  postDetail: postDetail[];
}

interface Post {
  id: String;
  title: String;
  description: String;
  image: any;
  postDetail: Array<postDetail>;
  // postDetail: postDetail[];
  postScope: any;
}

const Category = () => {
  const pathname = usePathname();

  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    fetch("https://utp-app.vercel.app/post/posts/api?idUser=&category=all")
      .then((r) => r.json())
      .then((r) => console.log(r));
  }, []);

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
