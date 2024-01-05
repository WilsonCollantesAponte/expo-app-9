import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Post } from "../../types/main";

const NewPost = () => {
  const [image, setImage] = useState<string>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [data, setData] = useState<Post>({
    id: null,
    title: "N - Testing - Upload from an Android device - Title",
    description: "N - Testing - Upload from an Android device - Description",
    image: [],
    postDetail: null,
    postScope: {
      architecture: true,
      civilEngineering: true,
      industrialEngineering: true,
      systemsEngineering: true,
      id: null,
      idPost: null,
      Post: null,
    },
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setData({ ...data, image: [result.assets[0].uri] });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Genera un nuevo posteo aquí</Text>
      <TextInput style={styles.textInput} placeholder="Title" />
      <TextInput style={styles.textInput} placeholder="Description" />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </View>
      <View>
        <Pressable
          onPress={() => {
            console.log("oye ...");

            setIsLoading(true);
            // fetch("https://utp-app.vercel.app/post/form/api", {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify(data),
            // })
            //   .then((r) => r.json())
            //   .then((r) => console.log(JSON.stringify(r)))
            //   .then(() => setIsLoading(false))
            //   .catch((e) => {
            //     console.log("not submit");
            //     console.log(e);

            //     setIsLoading(false);
            //   });

            fetch(
              "http://localhost:3000/newPost"
              // ,
              //  {
              //   method: "GET",
              //   // headers: {
              //   //   Accept: "application/json",
              //   //   "Content-Type": "application/json",
              //   // },
              //   // body: JSON.stringify({
              //   //   image: data.image,
              //   //   data: {
              //   //     title: data.title,
              //   //     description: data.description,
              //   //   },
              //   //   postScope: data.postScope,
              //   // }),
              // }
            )
              .then((r) => r.json())
              .then((r) => console.log(r))
              .then(() => setIsLoading(false))
              .catch((e) => {
                console.log(e);
                setIsLoading(false);
              });
          }}
        >
          <Text style={styles.text}>Save and Send</Text>
          <Text style={styles.text}>{String(isLoading)}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f3f46",
    alignItems: "center",
    rowGap: 10,
    paddingTop: "10%",
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "700",
  },
  text1: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  textInput: {
    color: "black",
    borderWidth: 0.9,
    borderColor: "black",
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
    width: "75%",
  },
  pressable: {
    backgroundColor: "#95a1c3",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 100,
  },
});
