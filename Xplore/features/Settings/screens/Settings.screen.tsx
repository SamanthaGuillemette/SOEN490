import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import EditProfileBox from "../components/EditProfileBox";
import PassBox from "../components/PassBox";
import SaveButton from "../components/SaveButton";
import TopicBox from "../components/TopicBox";
import EditAvatar from "../components/EditAvatar";
import { ScrollView } from "react-native";

interface ProfileProps {}

const Settings = ({}: ProfileProps) => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <ScrollView>
        <EditAvatar />
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
