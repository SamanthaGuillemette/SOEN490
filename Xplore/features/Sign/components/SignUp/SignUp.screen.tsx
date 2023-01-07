/* eslint-disable */
import { NavigationProp } from "@react-navigation/native";
import * as React from "react";
import { PrimaryButton, View, TextInput } from "../../../../components";
import styles from "./SignUp.styles";
import { ID } from "appwrite";
import api, { account } from "../../../../services/appwrite/api";

// Need to implement
//  ** error handling
//    ** maybe a popup window or toast
//    ** for stuff below:
//  ** input sanitization
//    ** Passwods are the same
//    ** Username does not exist
//    ** email does not exist
//    ** email is valid (xyz@gmail.com)
//  ** getting a name

interface SignUpProps {
  navigation: NavigationProp<any>;
}

const handleSignUp = (username: string, email: string, password: string) => {
  const promise = api.createAccount(email, password, username);
  promise.then(
    async function (accountObj) {
      console.log(`===> Account created: ${JSON.stringify(accountObj)}`);
      await api.createEmailVerification();
    },
    function (err) {
      console.log(err);
    }
  );
};

const SignUp = (props: SignUpProps) => {
  const [username, setUserName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <View style={styles.container}>
      <TextInput
        placeHolder={"Username"}
        iconName={"user"}
        onChangeText={(thisUsername: string) => setUserName(thisUsername)}
      />
      <TextInput
        placeHolder={"Email"}
        iconName={"mail"}
        onChangeText={(thisEmail: string) => setEmail(thisEmail)}
      />
      <TextInput
        placeHolder={"Password"}
        iconName={"lock"}
        secureTextEntry={true}
        onChangeText={(thisPassword: string) => setPassword(thisPassword)}
      />
      <TextInput
        placeHolder={"Confirm Password"}
        iconName={"lock"}
        secureTextEntry={true}
      />
      <PrimaryButton
        label="SIGN UP"
        style={styles.PrimaryButton}
        onPress={() => {
          handleSignUp(username, email, password);
          setEmail("");
          setUserName("");
          setPassword("");
        }}
      />
    </View>
  );
};

export default SignUp;
