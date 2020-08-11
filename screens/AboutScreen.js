import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import goblin from '../assets/goblin.png';
import { Entypo } from '@expo/vector-icons'; 
import { Linking } from 'expo';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={goblin} style={styles.backgroundImage}></Image>
      <View style={styles.textWrapper} >
        <Text style={styles.body}>TripWolf is a container for you to keep track of the places you've been or want to visit</Text>
        <View style={styles.socialMediaContainer}>
          <Entypo name="facebook" size={35} color="white" onPress={() => Linking.openURL('https://www.facebook.com/zeffmeister/')} />
          <Entypo name="instagram" size={35} color="white" onPress={() => Linking.openURL('https://www.instagram.com/fractalscape/')} />
          <Entypo name="linkedin" size={35} color="white" onPress={() => Linking.openURL('https://www.linkedin.com/josephwangemann/')} />
        </View>
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
  socialMediaContainer: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    marginTop: 25,
    justifyContent: "space-evenly",
    paddingHorizontal: "10%",
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

export default AboutScreen;