import * as React from "react";
import { TextInput } from "react-native";
import { PrimaryButton, View, Icon } from "../../../../components";
import { useThemeColor } from "../../../../hooks";
import styles from "./SignUp.styles";

const SignUp = () => {
  const gray77 = useThemeColor("gray77");
  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <View style={[styles.inputWrapper, { borderBottomColor: gray77 }]}>
          <Icon name="user" color="gray77" style={styles.textInputIcon} />
          <TextInput placeholderTextColor={gray77} placeholder="Username" />
        </View>
        <View style={[styles.inputWrapper, { borderBottomColor: gray77 }]}>
          <Icon name="mail" color="gray77" style={styles.textInputIcon} />
          <TextInput placeholderTextColor={gray77} placeholder="Email" />
        </View>
        <View style={[styles.inputWrapper, { borderBottomColor: gray77 }]}>
          <Icon name="lock" color="gray77" style={styles.textInputIcon} />
          <TextInput
            placeholderTextColor={gray77}
            secureTextEntry={true}
            placeholder="Password"
          />
        </View>
        <View style={[styles.inputWrapper, { borderBottomColor: gray77 }]}>
          <Icon name="lock" color="gray77" style={styles.textInputIcon} />
          <TextInput
            placeholderTextColor={gray77}
            secureTextEntry={true}
            placeholder="Confirm Password"
          />
        </View>
        <PrimaryButton label="SIGN UP" style={{ marginTop: 40 }} />
      </View>
    </View>
  );
};

export default SignUp;
