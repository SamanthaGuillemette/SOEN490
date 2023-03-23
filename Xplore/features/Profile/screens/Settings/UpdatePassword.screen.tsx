import { useState } from "react";
import { ScrollView } from "react-native";
import { PrimaryButton, Text, TextInput, View } from "../../../../components";
import { useThemeColor } from "../../../../hooks";
import api from "../../../../services/appwrite/api";
import styles from "./UpdatePassword.styles";

const UpdatePassword = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordReentered, setReenteredPassword] = useState<string>("");
  const [buttonLabel, setButtonLabel] = useState<string>("SAVE");
  const errorColor = useThemeColor("error");

  const renderErrorText = () => {
    if (password !== passwordReentered) {
      return (
        <Text variant="body" style={{ color: errorColor }}>
          Re-entered password doesn't match
        </Text>
      );
    }
    return null;
  };

  const handleUpdatePassword = async () => {
    try {
      await api.updatePassword(password);
    } catch (error) {
      alert(error);
    }
    setTimeout(() => setButtonLabel("UPDATING..."), 300);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.textItems}>
          <Text variant="h2">Change password</Text>
          <Text variant="body" color="bodyText" style={styles.subTitleText}>
            Enter a new password below
          </Text>
        </View>

        <TextInput
          placeHolder="New password"
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

        {renderErrorText()}

        <PrimaryButton
          label={buttonLabel}
          style={styles.primaryButton}
          onPress={handleUpdatePassword}
        />
      </View>
    </ScrollView>
  );
};

export default UpdatePassword;
