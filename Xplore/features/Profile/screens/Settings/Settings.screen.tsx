import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import EditAvatar from "../../components/settings-components/EditAvatar";
import { ScrollView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { PrimaryButton } from "../../../../components";

interface SettingsProps {
  navigation: NavigationProp<any>;
}

const Settings = (props: SettingsProps) => {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <ScrollView>
        <EditAvatar onPress={() => navigation.navigate("BottomTabNavigator")} />

        <PrimaryButton label="SAVE" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
});
