import React, { useState, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Alert,
  Dimensions,
} from "react-native";
import { AuthContext } from "../App";
import * as firebase from "firebase";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import goblin from '../assets/goblin.png';

const windowHeight = Dimensions.get('window').height;

const SignUpScreen = ({ navigation }) => {

  const { updateUser } = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  async function signUp(e) {
    e.preventDefault();
    navigation.push("Loading");

    if (userName.trim() === "") {
      Alert.alert("Please choose a username");
      navigation.navigate("SignUpScreen");
    } else if (email.trim() === "") {
      Alert.alert("Please enter a valid email");
      navigation.navigate("SignUpScreen");
    } else if (password.length < 6) {
      Alert.alert("Password must be longer than 6 characters");
      navigation.navigate("SignUpScreen");
    } else if (password !== passwordConfirm) {
      Alert.alert("Passwords don't match, please try again");
      navigation.navigate("SignUpScreen");
    } 

      let user = firebase.auth().currentUser;
      await user.updateProfile({
        displayName: userName,
      });
      await user.reload().then(updateUser());
      const userID = user.uid;
  }

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      scrollToOverflowEnabled={false}
      style={{
        flex: 1,
        height: "100%",
        backgroundColor: "#161616",
      }}
    >
      <ImageBackground source={goblin} style={styles.MainContainer}>
        <View style={styles.textWrapper}>
          <TextInput
            placeholder="Choose a username"
            value={userName}
            onChangeText={setUserName}
            style={styles.input}
            placeholderTextColor="#DDE2E4"
          />   
          <TextInput
            keyboardType={"email-address"}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholderTextColor="#DDE2E4"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholderTextColor="#DDE2E4"
          />
          <TextInput
            placeholder="Confirm password"
            secureTextEntry={true}
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            style={styles.input}
            placeholderTextColor="#DDE2E4"
          />
          <TouchableOpacity style={styles.button} onPress={signUp}>
            <Text style={styles.buttontext}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
            <Text style={styles.linkText}>Return to sign in</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    height: windowHeight,
    width: "100%",
    resizeMode: "contain",
  },
  textMain: {
    marginBottom: "10%",
    fontSize: 30,
    color: "#DDE2E4",
    fontWeight: "600",
  },
  textSub: {
    fontSize: 20,
    color: "white",
    fontWeight: "400",
    textAlign: "center",
  },
  textWrapper: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "rgba(16,16,16,0.5)",
    padding: 50,
    width: "100%",
    height: "100%",
  },
  input: {
    height: 40,
    borderColor: "#DDE2E4",
    borderWidth: 2,
    margin: 13,
    width: 200,
    alignItems: "center",
    textAlign: "center",
    color: "white",
    fontSize: 15,
    backgroundColor: "#161616"
  },
  button: {
    backgroundColor: "#DDE2E4",
    margin: 13,
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 100,
    borderRadius: 5,
    borderColor: "#DDE2E4",
    borderWidth: 1
  },
  buttontext: {
    fontSize: 20,
    color: "#161616",
  },
  linkText: {
    textAlign: "center",
    color: "#DDE2E4",
    fontSize: 17,
  },
});

export default SignUpScreen;