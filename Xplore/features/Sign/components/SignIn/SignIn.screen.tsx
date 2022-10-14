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
      <TextInput placeHolder="Username" iconName="user" />
      <TextInput placeHolder="Password" iconName="lock" secureTextEntry />
      <PrimaryButton label="SIGN IN" style={styles.PrimaryButton} />
      <SecondaryButton label="FORGOT PASSWORD" style={styles.SecondaryButton} />
    </View>
  );
};

export default SignIn;
