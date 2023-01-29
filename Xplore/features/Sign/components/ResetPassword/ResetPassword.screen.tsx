import { useRef } from "react";
import { View, PrimaryButton, TextInput, Text } from "../../../../components";
import styles from "./ResetPassword.styles";
import { ScrollView } from "react-native";
import LottieView from "lottie-react-native";
import { NavigationProp } from "@react-navigation/native";
import { useAuth } from "../../../../hooks";
import { useState } from "react";

interface ResetPasswordProps {
  navigation: NavigationProp<any>;
}

const ResetPassword = (props: ResetPasswordProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [password, setPassword] = useState<string>("");
  const [passwordReentered, setReenteredPassword] = useState<string>("");
  const { navigation } = props;
  const animation = useRef(null);

  const { linkData, confirmRecovery } = useAuth();

  const confirm = () => {
    if (linkData.queryParams?.userId && linkData.queryParams?.secret) {
      confirmRecovery(
        linkData.queryParams.userId.toString(),
        linkData.queryParams.secret.toString(),
        passwordReentered
      );
      navigation.navigate("Sign");
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <LottieView
            autoPlay
            ref={animation}
            source={require("../../../../assets/lottieFiles/securePassword.json")}
            style={styles.forgotPasswordImage}
          />
        </View>

        <View style={styles.textItems}>
          <Text variant="h2">Reset password</Text>
          <Text variant="body" color="bodyText" style={styles.subTitleText}>
            Enter a new password below
          </Text>
        </View>

        <TextInput
          placeHolder="Password"
          iconName="lock"
          secureTextEntry
          onChangeText={(pw: string) => setPassword(pw)}
        />
        <TextInput
          placeHolder="Re-enter password"
          iconName="lock"
          secureTextEntry
          onChangeText={(pw: string) => setReenteredPassword(pw)}
        />

        <PrimaryButton
          label="RESET PASSWORD"
          style={styles.primaryButton}
          onPress={confirm}
        />
      </View>
    </ScrollView>
  );
};

export default ResetPassword;
