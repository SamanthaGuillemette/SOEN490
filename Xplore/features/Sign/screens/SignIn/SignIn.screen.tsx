import * as React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "./SignIn.styles";

const SignIn = () => {
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
            source={require("../../../assets/icons/Password.png")}
          />
          <TextInput
            placeholderTextColor={"#C4C4C4"}
            secureTextEntry={true}
            placeholder="Password"
          />
        </View>
        <TouchableOpacity
          style={styles.login_button}
          //onPress={() => navigation.navigate("UserGuide")}
        >
          <Text style={styles.inputTextStyle}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.forgot_button}
          //onPress={() => navigation.navigate("UserGuide")}
        >
          <Text style={styles.inputTextStyleDark}>FORGOT PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
