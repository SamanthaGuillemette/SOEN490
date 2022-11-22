import { NavigationProp } from "@react-navigation/native";
import * as React from "react";
import {
  View,
  PrimaryButton,
  SecondaryButton,
  TextInput,
} from "../../../../components";
import styles from "./SignIn.styles";
import { account } from "../../../../services/appwrite/appwrite";

interface SignInProps {
  navigation: NavigationProp<any>;
}

const handleSignIn = (username: string, password: string) => {
  const promise = account.createEmailSession(username, password);

  promise.then(
    function (response: any) {
      console.log(response); // Success
    },
    function (error: any) {
      console.log(error); // Failure
    }
  );
};

const SignIn = (props: SignInProps) => {
  const { navigation } = props;
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput
        placeHolder="Username"
        iconName="user"
        onChangeText={(thisEmail: string) => setEmail(thisEmail)}
      />
      <TextInput
        placeHolder="Password"
        iconName="lock"
        secureTextEntry
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
        onPress={() => navigation.navigate("ForgotPassword")}
      />
    </View>
  );
};

export default SignIn;
