import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground,
} from "react-native";
import * as firebase from "firebase";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import goblin from '../assets/goblin.png';


const SignInScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    if (email.length < 6) {
      Alert.alert("Please enter a valid email address");
      return;
    }
    if (!password.length) {
      Alert.alert("Please enter a password");
      return;
    }
    navigation.push("LoadingScreen");
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function (error) {
          if (
            error.code === "auth/wrong-password" ||
            error.code === "auth/user-not-found"
          ) {
            Alert.alert("Incorrect username or password");
          } else {
            Alert.alert(error.toString(error));
          }
          navigation.pop();
        });
    } catch {
      Alert.alert(error.toString(error));
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.keyboardAwareStyle}>
      <ImageBackground source={goblin} style={styles.MainContainer}>
          <TouchableOpacity>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#DDE2E4"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              autoCapitalize={"none"}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#DDE2E4"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.signIn} onPress={signIn}>
            <Text style={styles.text}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push("SignUpScreen")}>
            <Text style={styles.buttonText}>New? Click to create an account</Text>
          </TouchableOpacity>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  keyboardAwareStyle: {
    flex: 1,
    backgroundColor: "rgb(16,16,16)",
  },
  MainContainer: {
    paddingTop: "60%",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  buttonText: {
    textAlign: "center",
    color: "#DDE2E4",
    fontWeight: "500",
    fontSize: 19,
  },
  input: {
    height: 40,
    borderColor: "#DDE2E4",
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    width: 250,
    color: "#DDE2E4",
    backgroundColor: "rgba(16,16,16,0.8)",
    padding: "2%",
  },
  text: {
    textAlign: "center",
    color: "rgb(16,16,16)",
    fontSize: 19,
  },
  signIn: {
    backgroundColor: "#DDE2E4",
    width: 100,
    marginTop: 15,
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
    borderColor: "#DDE2E4",
    borderWidth: 1
  },
});

export default SignInScreen;