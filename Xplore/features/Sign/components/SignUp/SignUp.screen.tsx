import * as React from "react";
import { PrimaryButton, View, TextInput } from "../../../../components";
import styles from "./SignUp.styles";
import { account } from "../../../../assets/appwrite/appwrite";

const SignUp = () => {
  const [username, setUserName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  console.log(username + " " + email + " " + password + " ");
  function SignUpFunction() {
    const promise = account.create(username, email, password, username);
    promise.then(
      function (result: any) {
        console.log("result: \n");
        console.log(result);
      },
      function (err: any) {
        console.log("error: \n");
        console.log(err);
      }
    );
  }
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
        onPress={SignUpFunction}
      />
    </View>
  );
};

export default SignUp;
