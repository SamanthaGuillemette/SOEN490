import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

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

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  inputsContainer: {
    marginTop: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#C4C4C4",
    padding: 5,
    marginBottom: 25,
    width: 250,
  },
  textInputIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  signup_button: {
    backgroundColor: "#463FB0",
    marginTop: 40,
    width: 250,
    paddingVertical: 16,
    borderRadius: 25,
    shadowColor: "#463FB0",
    shadowOpacity: 0.3,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  inputTextStyle: {
    textAlign: "center",
    color: "white",
  },
  inputTextStyleDark: {
    textAlign: "center",
    color: "#463FB0",
  },
});
