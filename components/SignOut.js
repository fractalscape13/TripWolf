import * as firebase from "firebase";

const signOut = ({ navigation }) => {
  try {
    firebase.auth().signOut();
    navigation.navigate("SignInScreen");
  } catch (error) {}
  return null;
};

export default signOut;