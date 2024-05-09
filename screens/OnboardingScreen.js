import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { Color } from "../GlobalStyles";

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={[styles.onboardingscreen, styles.signUpIconLayout]}>
      <View style={styles.grpahics}>
        <View style={styles.upperLable}>
          <Animatable.Image
            animation="fadeIn"
            duration={1500}
            delay={500}
            style={styles.image83Icon}
            contentFit="cover"
            source={require("../assets/image-83.png")}
          />
          <Animatable.Image
            animation="fadeIn"
            duration={1500}
            delay={1000}
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <View style={styles.signUpLogin}>
            <View style={styles.signUpParent}>
              <Animatable.Image
                animation="fadeIn"
                duration={1500}
                delay={1500}
                style={[styles.signUpIcon, styles.signUpIconLayout]}
                contentFit="cover"
                source={require("../assets/sign-up.png")}
                onPress={() => navigation.navigate("Login")}
              />
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.signUpLogin}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Animatable.Image
              animation="fadeIn"
              duration={1500}
              delay={2000}
              style={styles.loginIcon}
              contentFit="contain"
              source={require("../assets/login.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomLogo}>
          <Animatable.Image
            animation="fadeIn"
            duration={1500}
            delay={2500}
            style={styles.googleIcon}
            contentFit="cover"
            source={require("../assets/google.png")}
          />
          <Animatable.Image
            animation="fadeIn"
            duration={1500}
            delay={3000}
            style={styles.facebookIcon}
            contentFit="cover"
            source={require("../assets/facebook.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpIconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  image83Icon: {
    width: 202,
    height: 75,
  },
  vectorIcon: {
    width: 306,
    height: 306,
    marginTop: 18,
  },
  upperLable: {
    justifyContent: "center",
    alignItems: "center",
  },
  signUpIcon: {
    maxWidth: "100%",
    height: 56,
    alignSelf: "stretch",
  },
  loginIcon: {
    marginTop: 16,
  },
  signUpParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  signUpLogin: {
    width: 295,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  googleIcon: {
    width: 26,
    height: 25,
  },
  facebookIcon: {
    width: 27,
    height: 26,
    marginLeft: 40,
  },
  bottomLogo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  grpahics: {
    height: 581,
    justifyContent: "space-between",
    alignItems: "center",
  },
  onboardingscreen: {
    backgroundColor: Color.mainWhite,
    flex: 1,
    paddingHorizontal: 27,
    paddingVertical: 83,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default OnboardingScreen;
