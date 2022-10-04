import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

interface SignInProps {}

const SignIn = ({}: SignInProps) => {
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

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  inputsContainer: {
    marginTop: 100,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#C4C4C4",
    padding: 5,
    marginBottom: 35,
    width: 250,
  },
  textInputIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  login_button: {
    backgroundColor: "#463FB0",
    marginTop: 30,
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
  forgot_button: {
    width: 250,
    marginTop: 15,
    marginBottom: 5,
    paddingVertical: 16,
    borderRadius: 25,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#463FB0",
    shadowColor: "#463FB0",
    shadowOpacity: 0.1,
    elevation: 3,
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
