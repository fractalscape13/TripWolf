import React from "react";
import {
  Text,
  View,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const Header = (props) => {

  const navigation = useNavigation();

  return (
    <View style={styles.MainHeaderWrapper}>
         <View style={ props.isSplash ? styles.navIconLeftHidden : props.isHome ? styles.navIconLeftHidden : styles.navIconLeft} pointerEvents={ props.isSplash ? "none" : props.isHome? 'none' : 'auto'}>
            <Ionicons
            // style={styles.backIcon}
            onPress={() => {navigation.goBack()}}
            name="ios-arrow-back"
            size={45}
            color="#DDE2E4"
            resizeMode="contain"
            />
        </View>
        <View styles={styles.logoContainer}>
          {props.subheaderTitle ? 
            <Text style={{fontSize: 30, fontWeight: "200", color: "white", }}>{props.subheaderTitle}</Text> 
          :
            <Text style={{fontSize: 30, fontWeight: "250", color: "white", }}>TripWolf</Text>
          }
        </View>
        <View style={props.isSplash ? styles.navIconRightHidden : props.isHome? styles.navIconRight : styles.navIconRightHidden} pointerEvents={ props.isSplash ? "none" : props.isHome? 'auto' : 'none'}>
          <Ionicons
          style={styles.hamburger}
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}
          name="ios-menu"
          size={45}
          color="#DDE2E4"
          resizeMode="contain"
          /> 
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainHeaderWrapper: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
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