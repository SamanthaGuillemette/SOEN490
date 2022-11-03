import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import EditBoxes from "../components/EditBoxes";
import UserAvatar2 from "../components/UserAvatar2";
import { ScrollView } from "react-native";

interface ProfileProps {}

const Settings = ({}: ProfileProps) => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <ScrollView>
        <UserAvatar2 />
        <EditBoxes />
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
