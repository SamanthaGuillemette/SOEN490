import { useRef } from "react";
import { View, PrimaryButton, TextInput, Text } from "../../../../components";
import styles from "./ResetPassword.styles";
import { ScrollView } from "react-native";
import LottieView from "lottie-react-native";

const ResetPassword = () => {
  const animation = useRef(null);
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
          <Text variant="body" color="gray300" style={styles.subTitleText}>
            Enter a new password below
          </Text>
        </View>

        <TextInput placeHolder="Password" iconName="lock" secureTextEntry />
        <TextInput
          placeHolder="Re-enter password"
          iconName="lock"
          secureTextEntry
        />

        <PrimaryButton label="RESET PASSWORD" style={styles.primaryButton} />
      </View>
    </ScrollView>
  );
};

export default ResetPassword;
