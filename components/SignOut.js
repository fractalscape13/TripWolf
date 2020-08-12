import * as firebase from "firebase";

const signOut = (props) => {
  try {
    firebase.auth().signOut();
    props.navigation.navigate("SignInScreen");
  } catch (error) {}
  return null;
};

export default signOut;