import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import goblin from '../assets/goblin.png';

const AddScreen = () => {

  const doThis = () => {
    // dummy function for buttons //
    return
  }

  return (
    <View style={styles.container}>
      <Image source={goblin} style={styles.backgroundImage}></Image>
      <View style={styles.textWrapper} >
        <TouchableOpacity onPress={doThis}>
          <Text style={styles.body}>New album</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={doThis}>
          <Text style={styles.body}>Upload image</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={doThis}>
          <Text style={styles.body}>Add a note</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textWrapper: {
    alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(16,16,16, 0.4)",
    paddingVertical: "25%",
    paddingHorizontal: "15%",
  },
  backgroundImage: {
    flex: 1,
    position: "absolute",
    height: "140%",
    width: "120%"
  },
  header: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  body: {
    padding: "2%",
    margin: "3%",
    fontSize: 18,
    color: "white",
    textAlign: "center",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 7
  },
});

export default AddScreen;