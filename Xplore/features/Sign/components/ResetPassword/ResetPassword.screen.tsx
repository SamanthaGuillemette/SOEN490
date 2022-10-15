import * as React from "react";
import { View, PrimaryButton, TextInput, Text } from "../../../../components";
import styles from "./ResetPassword.styles";
import { Image, ScrollView } from "react-native";

const ResetPassword = () => {
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
          <Text variant="h2">Reset password</Text>
          <Text variant="body" color="gray300">
            Enter a new password below
          </Text>
        </View>
        <TextInput placeHolder="Password" iconName="lock" secureTextEntry />
        <TextInput
          placeHolder="Re-enter password"
          iconName="lock"
          secureTextEntry
        />

        <PrimaryButton label="RESET PASSWORD" style={styles.PrimaryButton} />
      </View>
    </ScrollView>
  );
};

export default ResetPassword;
