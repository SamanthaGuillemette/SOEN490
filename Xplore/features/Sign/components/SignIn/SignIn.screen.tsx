import { NavigationProp } from "@react-navigation/native";
import * as React from "react";
import {
  View,
  PrimaryButton,
  SecondaryButton,
  TextInput,
} from "../../../../components";
import { ProjectCard } from "../../../Projects/components/ProjectCard";
import styles from "./SignIn.styles";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { useAuth } from "../../../../hooks";
interface SignInProps {
  navigation: NavigationProp<any>;
}

const SignIn = (props: SignInProps) => {
  const { navigation } = props;
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { signIn, loading } = useAuth();

  return (
    <View style={styles.container}>
      <Spinner
        visible={loading}
        textContent={"Hang tight!\n We're signing you in ⚡"}
        textStyle={styles.loadingScreen}
        animation={"fade"}
      />
      <ProjectCard
        projectName="Snake Robot"
        taskCount={32}
        conversationCount={12}
        percentComplete={67}
        description="Build a cool Arduino-based Snake Robot"
        memberAvatars={[
          "https://picsum.photos/200",
          "https://picsum.photos/200",
          "https://picsum.photos/200",
          "https://picsum.photos/200",
          "https://picsum.photos/200",
        ]}
      />
      <TextInput
        placeHolder="Email"
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
          signIn(email, password);
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
