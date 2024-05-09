import React, { createContext, useState, useEffect } from "react";

import { authApi } from "../api";

export const AuthContext = createContext();
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "../screens/Home";


export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  
  const login = (email, password) => {
    setIsLoading(true);
    // API call to login
    authApi
      .login(email, password)
      .then(async (response) => {
        setIsLoading(false);
        setUserToken(response.data.authorization.access_token);
        console.log("Login successful:", response.data.authorization.access_token);
        AsyncStorage.setItem("userToken", response.data.authorization.access_token);
         // Replace 'Home' with your desired screen
        token =await AsyncStorage.getItem("userToken");
        alert("Login Success.");
        
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("Login error:", error);
        alert("Login failed. Please check your credentials.");
        navigation.navigate("Login"); // Replace 'Home' with your desired screen
      });
  };


  

  



  const logout = () => {
    // API call to logout
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      if (token) {
        setUserToken(token);
      }
    } catch (error) {
      console.log("Error getting user token:", error);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoading, userToken, login, logout,Home }}>
      {children}
    </AuthContext.Provider>
  );
};
