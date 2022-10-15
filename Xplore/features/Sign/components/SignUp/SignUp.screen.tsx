import * as React from "react";
import { PrimaryButton, View, TextInput } from "../../../../components";
import styles from "./SignUp.styles";
import { account } from "../../../../assets/appwrite/appwrite";

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

const handleSignUp = (username: string, email: string, password: string) => {
  const promise = account.create(username, email, password, username);
  promise.then(
    function (result: any) {
      console.log("result: \n");
      console.log(result);

      // TODO Redirect if all good to dashboard
    },
    function (err: any) {
      console.log("error: \n");
      console.log(err);
    }
  );
};

const SignUp = () => {
  const [username, setUserName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <View style={styles.container}>
      <TextInput
        PlaceHolder={"Username"}
        IconName={"user"}
        onChangeText={(thisUsername: string) => setUserName(thisUsername)}
      />
      <TextInput
        PlaceHolder={"Email"}
        IconName={"mail"}
        onChangeText={(thisEmail: string) => setEmail(thisEmail)}
      />
      <TextInput
        PlaceHolder={"Password"}
        IconName={"lock"}
        SecureTextEntry={true}
        onChangeText={(thisPassword: string) => setPassword(thisPassword)}
      />
      <TextInput
        PlaceHolder={"Confirm Password"}
        IconName={"lock"}
        SecureTextEntry={true}
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
