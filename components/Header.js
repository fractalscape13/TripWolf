import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const Header = (props) => {

  const navigation = useNavigation();

  return (
    <View style={styles.MainHeaderWrapper}>
         <TouchableOpacity 
          style={ props.isSplash ? styles.navIconLeftHidden : props.isHome ? styles.navIconLeftHidden : styles.navIconLeft} 
          disabled={ props.isSplash ? true : props.isHome? true : false}
        >
          <Ionicons
          onPress={() => {navigation.goBack()}}
          name="ios-arrow-back"
          size={45}
          color="#DDE2E4"
          resizeMode="contain"
          />
        </TouchableOpacity>
        <View styles={styles.logoContainer}>
          {props.subheaderTitle ? 
            <Text style={{fontSize: 30, fontWeight: "200", color: "white", }}>{props.subheaderTitle}</Text> 
          :
            <Text style={{fontSize: 30, fontWeight: "250", color: "white", }}>TripWolf</Text>
          }
        </View>
        <TouchableOpacity 
          style={props.isSplash ? styles.navIconRightHidden : props.isHome? styles.navIconRight : styles.navIconRightHidden} 
          disabled={ props.isSplash ? true : props.isHome? false : true}
        >
          <Octicons
          style={styles.hamburger}
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}
          name="gear"
          size={35}
          color="#DDE2E4"
          resizeMode="contain"
          /> 
        </TouchableOpacity>
          
    </View>
  );
};

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  MainHeaderWrapper: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    width: width - 35,
    flex: 1,
  },
  hamburger: {
    alignSelf: "flex-end",
  },
  navIconLeft: {
    width: '25%',
  },
  navIconLeftHidden: {
    opacity: 0,
    width: '25%',
  },
  navIconRight: {
    width: '25%',
  },
  navIconRightHidden: {
    opacity: 0,
    width: '25%',
  },
  logoContainer: {
    width: '50%',
  },
});

export default Header;