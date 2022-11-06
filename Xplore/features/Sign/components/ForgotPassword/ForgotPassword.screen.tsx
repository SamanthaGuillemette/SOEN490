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

const ForgotPassword = () => {
  const animation = useRef(null);

  return (
    <ScrollView>
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
          <Text variant="body" color="gray300" style={styles.subTitleText}>
            Enter your email to receive a link to reset your password
          </Text>
        </View>

        <TextInput placeHolder="Email" iconName="mail" />

        <PrimaryButton label="SEND RESET LINK" style={styles.primaryButton} />
        <LinkButton style={styles.loginLink}>Go back to login</LinkButton>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
