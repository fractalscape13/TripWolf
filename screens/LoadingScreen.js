import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import splash from '../assets/splash.png';

const LoadingScreen = () => {

  return (
    <View style={styles.main}>
      <Text style={styles.text}>L O A D I N G</Text>
      <Image source={splash} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#161616",
    height: "100%"
  },
  text: {
    color: "cyan",
    fontSize: 50
  },
  image: {
    width: 270,
    height: 200
  }
});

export default LoadingScreen;