import * as React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "./SignUp.styles";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <View style={styles.inputWrapper}>
          <Image
            style={styles.textInputIcon}
            source={require("../../../assets/icons/UserIcon.png")}
          />
          <TextInput placeholderTextColor={"#C4C4C4"} placeholder="Username" />
        </View>
        <View style={styles.inputWrapper}>
          <Image
            style={styles.textInputIcon}
            source={require("../../../assets/icons/email.png")}
          />
          <TextInput placeholderTextColor={"#C4C4C4"} placeholder="Email" />
        </View>
        <View style={styles.inputWrapper}>
          <Image
            style={styles.textInputIcon}
            source={require("../../../assets/icons/Password.png")}
          />
          <TextInput
            placeholderTextColor={"#C4C4C4"}
            secureTextEntry={true}
            placeholder="Password"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Image
            style={styles.textInputIcon}
            source={require("../../../assets/icons/Password.png")}
          />
          <TextInput
            placeholderTextColor={"#C4C4C4"}
            secureTextEntry={true}
            placeholder="Confirm Password"
          />
        </View>
        <TouchableOpacity
          style={styles.signup_button}
          //onPress={() => navigation.navigate("UserGuide")}
        >
          <Text style={styles.inputTextStyle}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
