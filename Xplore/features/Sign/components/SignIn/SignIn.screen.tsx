import * as React from "react";
import {
  View,
  PrimaryButton,
  SecondaryButton,
  TextInput,
} from "../../../../components";
import styles from "./SignIn.styles";

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <TextInput PlaceHolder={"Username"} IconName={"user"} />
        <TextInput
          PlaceHolder={"Password"}
          IconName={"lock"}
          SecureTextEntry={true}
        />
        <PrimaryButton label="SIGN IN" style={styles.PrimaryButton} />
        <SecondaryButton
          label="FORGOT PASSWORD"
          style={styles.SecondaryButton}
        />
      </View>
    </View>
  );
};

export default SignIn;
