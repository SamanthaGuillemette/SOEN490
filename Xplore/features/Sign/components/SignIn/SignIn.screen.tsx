import * as React from "react";
import {
  View,
  PrimaryButton,
  SecondaryButton,
  TextInput,
} from "../../../../components";
import styles from "./SignIn.styles";
import { account } from "../../../../assets/appwrite/appwrite";

const handleSignIn = (username: string, password: string) => {
  const promise = account.createEmailSession(username, password);

  promise.then(
    function (response) {
      console.log(response); // Success
    },
    function (error) {
      console.log(error); // Failure
    }
  );
};

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
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
        <PrimaryButton
          label="SIGN IN"
          style={styles.PrimaryButton}
          onPress={() => {
            handleSignIn(email, password);
            setEmail("");
            setPassword("");
          }}
        />
        <SecondaryButton
          label="FORGOT PASSWORD"
          style={styles.SecondaryButton}
        />
      </View>
    </View>
  );
};

export default SignIn;
