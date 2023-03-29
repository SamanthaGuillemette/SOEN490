import { useState } from "react";
import { ScrollView } from "react-native";
import { PrimaryButton, Text, TextInput, View } from "../../../../components";
import { useThemeColor } from "../../../../hooks";
import api from "../../../../services/appwrite/api";
import { ProfileModal } from "../../components";
import styles from "./UpdatePassword.styles";

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordReentered, setReenteredPassword] = useState<string>("");
  const [actionMessage, setActionMessage] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
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
      const result = await api.updatePassword(password, oldPassword);
      setActionMessage(
        "Password updated successfully on\n " +
          new Date(result?.$updatedAt).toUTCString()
      );
      setModalVisible(true);
    } catch (error: any) {
      setActionMessage(error.message);
      setModalVisible(true);
    }
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

        <View style={styles.oldPwInput}>
          <TextInput
            placeHolder="Current password"
            iconName="shield"
            secureTextEntry
            onChangeText={(pw: string) => setOldPassword(pw)}
          />
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
          label="SAVE"
          style={styles.primaryButton}
          onPress={handleUpdatePassword}
        />

        <ProfileModal modalVisible={modalVisible}>
          <Text variant="body">{actionMessage}</Text>
          <PrimaryButton
            style={styles.okayButton}
            label="Okay"
            onPress={() => setModalVisible(false)}
          />
        </ProfileModal>
      </View>
    </ScrollView>
  );
};

export default UpdatePassword;
