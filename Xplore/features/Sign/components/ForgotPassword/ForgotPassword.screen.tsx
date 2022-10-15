import * as React from "react";
import { View, PrimaryButton, TextInput } from "../../../../components";
import styles from "./ForgotPassword.styles";
import { Image } from "react-native";

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../assets/profilePicturePlaceholder.jpg")}
          style={styles.profilePicture}
        />
      </View>
      <TextInput placeHolder="Email" iconName="radio" />
      <PrimaryButton label="SEND RESET LINK" style={styles.PrimaryButton} />
    </View>
  );
};

export default ForgotPassword;
