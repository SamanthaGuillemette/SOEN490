import * as React from "react";
import { PrimaryButton, View, TextInput } from "../../../../components";
import styles from "./SignUp.styles";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <TextInput PlaceHolder={"Username"} IconName={"user"} />
      <TextInput PlaceHolder={"Email"} IconName={"mail"} />
      <TextInput
        PlaceHolder={"Password"}
        IconName={"lock"}
        SecureTextEntry={true}
      />
      <TextInput
        PlaceHolder={"Confirm Password"}
        IconName={"lock"}
        SecureTextEntry={true}
      />
      <PrimaryButton label="SIGN UP" style={styles.PrimaryButton} />
    </View>
  );
};

export default SignUp;
