import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import EditProfileBox from "../components/EditProfileBox";
import PassBox from "../components/PassBox";
import SaveButton from "../components/SaveButton";
import TopicBox from "../components/TopicBox";
import EditAvatar from "../components/EditAvatar";
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
