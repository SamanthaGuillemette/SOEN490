import { NavigationProp } from "@react-navigation/native";
import * as React from "react";
import { PrimaryButton, View, TextInput } from "../../../../components";
import styles from "./SignUp.styles";
import { useAuth } from "../../../../hooks";
import Spinner from "react-native-loading-spinner-overlay/lib";
import * as Linking from "expo-linking";

interface SignUpProps {
  navigation: NavigationProp<any>;
  setScreen: (value: number) => void;
}

const SignUp = (props: SignUpProps) => {
  const [username, setUserName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const prefix = Linking.createURL("signup");

  const { signUp, loading } = useAuth();

  return (
    <View style={styles.container}>
      <Spinner
        visible={loading}
        textContent={"Hang tight!\n We're signing you up ⚡"}
        textStyle={styles.loadingScreen}
        animation={"fade"}
      />
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
          signUp(username, email, password, prefix);
          setEmail("");
          setUserName("");
          setPassword("");
          props.setScreen(0);
        }}
      />
    </View>
  );
};

export default SignUp;
