import React, { useContext } from "react";

import { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { Color } from "../GlobalStyles";

import LoginScreen from "react-native-login-screen";

import { AuthContext } from "../context/AuthContext";

const Login = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  
  
  const { login } = useContext(AuthContext);

  

  const signInWithGoogle = async () => {
    try {
      const { idToken } = await auth().signInWithGoogle();
      // idToken can be used to authenticate with your backend server
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  








  const handleLogin = () => {
    if (username === "" || password === "") {
      // alert("Please enter your email and password.");
      return;
    } else {
      login(username, password);
    }
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView>
      <LoginScreen
        logoImageSource={require("../assets/vector.png")}
        onLoginPress={() => {
          handleLogin();
        }}
        onSignupPress={() => {}}
        style={{ backgroundColor: Color.white }}
        onEmailChange={setUsername}
        onPasswordChange={setPassword}
        loginButtonStyle={{ backgroundColor: "black" }}
        enablePasswordValidation
        customSocialLoginButtons={
          <View style={styles.bottomLogo}>
            <Animatable.Image
              animation="fadeIn"
              duration={1500}
              delay={500}
              style={styles.googleIcon}
              contentFit="cover"
              onPress={signInWithGoogle}
              source={require("../assets/google.png")}
            />
            <Animatable.Image
              animation="fadeIn"
              duration={1500}
              delay={1000}
              style={styles.facebookIcon}
              contentFit="cover"
              source={require("../assets/facebook.png")}
            />
          </View>
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
});

export default Login;
