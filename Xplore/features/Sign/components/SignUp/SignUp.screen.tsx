import { NavigationProp } from "@react-navigation/native";
import * as React from "react";
import { PrimaryButton, View, TextInput } from "../../../../components";
import styles from "./SignUp.styles";

interface SignUpProps {
  navigation: NavigationProp<any>;
}

const SignUp = (props: SignUpProps) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <TextInput placeHolder={"Username"} iconName={"user"} />
      <TextInput placeHolder={"Email"} iconName={"mail"} />
      <TextInput
        placeHolder={"Password"}
        iconName={"lock"}
        secureTextEntry={true}
      />
      <TextInput
        placeHolder={"Confirm Password"}
        iconName={"lock"}
        secureTextEntry={true}
      />
      <PrimaryButton
        label="SIGN UP"
        style={styles.PrimaryButton}
        onPress={() => navigation.navigate("ResetPassword")}
      />
    </View>
  );
};

export default SignUp;
