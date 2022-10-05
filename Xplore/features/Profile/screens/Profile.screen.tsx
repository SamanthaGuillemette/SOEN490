import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Text } from "../../../components";
import ProfileInfo from "../components/ProfileInfo";

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <ProfileInfo />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
});
