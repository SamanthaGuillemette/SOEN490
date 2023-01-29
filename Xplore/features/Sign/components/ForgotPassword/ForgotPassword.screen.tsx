import { useRef } from "react";
import {
  View,
  PrimaryButton,
  TextInput,
  Text,
  LinkButton,
} from "../../../../components";
import styles from "./ForgotPassword.styles";
import { ScrollView } from "react-native";
import LottieView from "lottie-react-native";
import { NavigationProp } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { useAuth } from "../../../../hooks";
import { useState } from "react";
import * as Linking from "expo-linking";

interface ForgotPasswordProps {
  navigation: NavigationProp<any>;
}

const ForgotPassword = (props: ForgotPasswordProps) => {
  const { navigation } = props;
  const animation = useRef(null);
  const [email, setEmail] = useState<string>("");
  const prefix = Linking.createURL("reset");

  const { passwordRecovery, loading } = useAuth();
  return (
    <ScrollView>
      <Spinner
        visible={loading}
        textContent={"Hang tight!\n We're sending you a recovery email ⚡"}
        textStyle={styles.loadingScreen}
        animation={"fade"}
      />
      <View style={styles.container}>
        <View>
          <LottieView
            autoPlay
            ref={animation}
            source={require("../../../../assets/lottieFiles/forgotPassword.json")}
            style={styles.forgotPasswordImage}
          />
        </View>

        <View style={styles.textItems}>
          <Text variant="h2">Forgot password?</Text>
          <Text variant="body" color="smallText" style={styles.subTitleText}>
            Enter your email to receive a link to reset your password
          </Text>
        </View>

        <TextInput
          placeHolder="Email"
          iconName="mail"
          onChangeText={(thisEmail: string) => setEmail(thisEmail)}
        />
        <PrimaryButton
          label="SEND RESET LINK"
          style={styles.primaryButton}
          onPress={() => {
            passwordRecovery(email, prefix);
            navigation.goBack();
          }}
        />
        <LinkButton
          style={styles.loginLink}
          onPress={() => navigation.goBack()}
        >
          Go back to login
        </LinkButton>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
