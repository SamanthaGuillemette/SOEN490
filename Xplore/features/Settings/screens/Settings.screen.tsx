import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Edit_Boxes from "../components/Edit_Boxes";
import User_Avatar from "../components/User_Avatar";
import { ScrollView } from "react-native";

interface ProfileProps {}

const Settings = ({}: ProfileProps) => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <ScrollView>
        <User_Avatar />
        <Edit_Boxes />
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
