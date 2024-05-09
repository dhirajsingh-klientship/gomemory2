
import React, { useContext,useState } from "react";
import { View, ScrollView, TextInput, StyleSheet,TouchableHighlight,Text } from "react-native";
// import { Button } from "react-native-elements";
import { Color } from "../GlobalStyles";
import DatePicker from 'react-native-date-picker'
import {DateTimePicker, DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AuthContext } from "../context/AuthContext";
import LoginScreen from "react-native-login-screen";
import * as Animatable from "react-native-animatable";
import { authApi } from "../api";



const SignUp = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const { SignUp } = useContext(AuthContext);

  
  const handleSignUp = () => {
    // Implement your signup logic here
    

    authApi
      .signup(firstName+lastName, email,password,dob,mobile)
      .then(async (response) => {
        setIsLoading(false);
       
        //logic here
         
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("Signup error:", error);
        alert("Signup failed.");
        navigation.navigate("Login"); // Replace 'Home' with your desired screen
      });
  };



  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(moment(currentDate, 'DD-MM-YYYY'));
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };


  return (
    <ScrollView>
            <LoginScreen
              logoImageSource={require('../assets/vector.png')}
              onLoginPress={() => {
                handleSignUp();
              }}
              onSignupPress={() => {}}
              onEmailChange={setEmail}
              loginButtonText={'Create an account'}
              disableSignup
              loginButtonStyle={{ backgroundColor: "black" }}
              customSocialLoginButtons={
                <View style={styles.bottomLogo}>
                  <Animatable.Image
                    animation="fadeIn"
                    duration={1500}
                    delay={500}
                    style={styles.googleIcon}
                    contentFit="cover"
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
              textInputChildren={
                <View style={styles.inputContainer}>

                <TextInput
                  style={styles.input}
                  placeholder="First Name"
                  value={firstName}
                  onChangeText={setFirstName}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Last Name"
                  value={lastName}
                  onChangeText={setLastName}
                />

               <Text style={styles.marginTop}>Date of birth (DOB)</Text>

<TouchableHighlight onPress={showDatepicker} underlayColor="white" style={styles.input} >
                        <View style={styles.button}>
                          <TextInput placeholder="Date of birth" onChangeText={setDate} value={date.toLocaleString()}  editable={false}/>
                        </View>
                      </TouchableHighlight>


                <TextInput
                  style={styles.input}
                  placeholder="Mobile Number"
                  keyboardType="phone-pad"
                  value={mobile}
                  onChangeText={setMobile}
                />

              </View>
              }
              onPasswordChange={setPassword}
            />
        </ScrollView>
  );
};

const styles = StyleSheet.create({
  marginTop:{
    marginTop:10
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Color.white,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    marginTop: 15,
    backgroundColor: "#ebeef5",
    borderRadius: 5,
  },
  
  signupButton: {
    width: "100%",
    marginTop: 20,
    backgroundColor: "black",
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
});

export default SignUp;
