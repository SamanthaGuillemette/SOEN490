import * as React from "react";
import { TextInput } from "react-native";
import {
  View,
  Icon,
  PrimaryButton,
  SecondaryButton,
} from "../../../../components";
import { useThemeColor } from "../../../../hooks";
import styles from "./SignIn.styles";

const SignIn = () => {
  const gray77 = useThemeColor("gray77");
  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <View style={[styles.inputWrapper, { borderBottomColor: gray77 }]}>
          <Icon name="user" color="gray77" style={styles.textInputIcon} />
          <TextInput placeholderTextColor={gray77} placeholder="Username" />
        </View>
        <View style={[styles.inputWrapper, { borderBottomColor: gray77 }]}>
          <Icon name="lock" color="gray77" style={styles.textInputIcon} />
          <TextInput
            placeholderTextColor={gray77}
            secureTextEntry={true}
            placeholder="Password"
          />
        </View>
        <PrimaryButton label="SIGN IN" style={{ marginTop: 40 }} />
        <SecondaryButton label="FORGOT PASSWORD" style={{ marginTop: 15 }} />
      </View>
    </View>
  );
};

export default SignIn;
