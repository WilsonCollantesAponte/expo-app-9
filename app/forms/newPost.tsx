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
    title: "",
    description: "",
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

  // console.log(process.env.NODE_ENV);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      // mediaTypes: ImagePicker.MediaTypeOptions.All,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setData({
        ...data,
        image: [`data:image/png;base64,${result.assets[0].base64}`],
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Genera un nuevo posteo aquí</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Title"
        onChangeText={(text) => setData({ ...data, title: text })}
        value={data.title}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Description"
        onChangeText={(text) => setData({ ...data, description: text })}
        value={data.description}
      />
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
            setIsLoading(true);

            fetch("https://utp-app-server-nest.onrender.com/post", {
              // fetch("http://localhost:3000/post", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title: data.title,
                description: data.description,
                image: data.image,
                postScope: data.postScope,
              }),
            })
              .then(() => setIsLoading(false))
              .then(() => console.log("Successfully"))
              .catch((e) => {
                console.log(e);
                setIsLoading(false);
              });
          }}
        >
          {!isLoading && <Text style={styles.text}>Save and Send</Text>}
        </Pressable>
        {isLoading && <Text style={styles.text}>wait, it's Loading...</Text>}
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
