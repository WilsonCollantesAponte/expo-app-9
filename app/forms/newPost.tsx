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

const NewPost = () => {
  const [image, setImage] = useState<string>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Genera un nuevo posteo aquí</Text>
      <TextInput style={styles.textInput} placeholder="Title" />
      <TextInput style={styles.textInput} placeholder="Description" />
      {/* <Text style={styles.text}>Visible para</Text> */}
      <View
        style={{
          //  flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
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
    // justifyContent: "center",
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
