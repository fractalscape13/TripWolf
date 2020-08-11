import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import goblin from '../assets/goblin.png';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={goblin} style={styles.backgroundImage}></Image>
      <View style={styles.textWrapper} >
        <Text style={styles.body}>YOUR PROFILE</Text>
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
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(16,16,16, 0.5)",
    paddingVertical: 40,
    paddingHorizontal: 20,
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
    marginTop: 10,
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});

export default ProfileScreen;