import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import ProfileInfo from "../components/ProfileInfo";
import Badges from "../components/Badges";
import Projects from "../components/Projects";
import { ScrollView } from "react-native";

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <ScrollView>
        <ProfileInfo />
        <Badges />
        <Projects />
      </ScrollView>
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