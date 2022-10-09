import * as React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Icon } from "../../../../components/Icon";
import { useThemeColor } from "../../../../hooks";
import styles from "./SignIn.styles";

const SignIn = () => {
  const gray77 = useThemeColor("gray77");
  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <View style={styles.inputWrapper}>
          <Icon name="user" color="gray77" style={styles.textInputIcon} />
          <TextInput placeholderTextColor={gray77} placeholder="Username" />
        </View>
        <View style={styles.inputWrapper}>
          <Icon name="lock" color="gray77" style={styles.textInputIcon} />
          <TextInput
            placeholderTextColor={gray77}
            secureTextEntry={true}
            placeholder="Password"
          />
        </View>
        <TouchableOpacity style={styles.login_button}>
          <Text style={styles.inputTextStyle}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgot_button}>
          <Text style={styles.inputTextStyleDark}>FORGOT PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
