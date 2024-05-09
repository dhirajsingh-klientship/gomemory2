
import React, {useContext} from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "../context/AuthContext";

import { View, ActivityIndicator } from "react-native";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";



const AppNav = () => {
  const {isLoading, userToken} = useContext(AuthContext);

  if(isLoading) {
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       <ActivityIndicator size="large" color={'#000'}/>
    </View>
  }

  return (
    <NavigationContainer>
        {userToken ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;
