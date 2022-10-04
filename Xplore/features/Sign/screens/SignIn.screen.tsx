import * as React from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";

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
          <TextInput
            // placeholderTextColor={globalTheme.colors.bodyText}
            placeholder="Username"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Image
            style={styles.textInputIcon}
            source={require("../../../assets/icons/Password.png")}
          />
          <TextInput
            // placeholderTextColor={globalTheme.colors.bodyText}
            placeholder="Password"
          />
        </View>
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
    marginTop: 40,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    //borderBottomColor: globalTheme.colors.generalGrey,
    padding: 5,
    marginBottom: 35,
    width: 250,
  },
  textInputIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});
