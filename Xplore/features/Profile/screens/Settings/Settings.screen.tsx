import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import EditProfileBox from "../../components/settings-components/EditProfileBox";
import PassBox from "../../components/settings-components/PassBox";
import SaveButton from "../../components/settings-components/SaveButton";
import TopicBox from "../../components/settings-components/TopicBox";
import EditAvatar from "../../components/settings-components/EditAvatar";
import { ScrollView } from "react-native";
import { NavigationProp } from "@react-navigation/native";

interface SettingsProps {
  navigation: NavigationProp<any>;
}

const Settings = (props: SettingsProps) => {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <ScrollView>
        <EditAvatar onPress={() => navigation.navigate("Profile")} />
        <EditProfileBox />
        <PassBox />
        <TopicBox />
        <SaveButton />
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
