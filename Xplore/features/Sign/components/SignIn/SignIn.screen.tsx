import { NavigationProp } from "@react-navigation/native";
import * as React from "react";
import {
  View,
  PrimaryButton,
  SecondaryButton,
  TextInput,
} from "../../../../components";
import styles from "./SignIn.styles";

interface SignInProps {
  navigation: NavigationProp<any>;
}

const SignIn = (props: SignInProps) => {
  const { navigation } = props;
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput placeHolder="Username" iconName="user" />
      <TextInput placeHolder="Password" iconName="lock" secureTextEntry />
      <PrimaryButton
        label="SIGN IN"
        style={styles.PrimaryButton}
        onPress={() => navigation.navigate("BottomTabNavigator")}
      />
      <SecondaryButton
        label="FORGOT PASSWORD"
        style={styles.SecondaryButton}
        onPress={() => navigation.navigate("BottomTabNavigator")}
      />
    </View>
  );
};

export default SignIn;
