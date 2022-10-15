import * as React from "react";
import { View, PrimaryButton, TextInput, Text } from "../../../../components";
import styles from "./ForgotPassword.styles";
import { Image, ScrollView } from "react-native";
import { Link } from "@react-navigation/native";

const ForgotPassword = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image
            source={require("../../../../assets/profilePicturePlaceholder.jpg")}
            style={styles.profilePicture}
          />
        </View>
        <View style={styles.textItems}>
          <Text variant="h2">Forgot password?</Text>
          <Text variant="body" color="gray300">
            Enter your email to receive a link to reset your password
          </Text>
        </View>
        <TextInput placeHolder="Email" iconName="radio" />
        <PrimaryButton label="SEND RESET LINK" style={styles.PrimaryButton} />
        <Link to={{ screen: "Sign" }} style={styles.loginLink}>
          go back to login
        </Link>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
