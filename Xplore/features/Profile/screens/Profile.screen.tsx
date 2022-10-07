import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Text } from "../../../components";
import ProfileInfo from "../components/ProfileInfo";
import Badges from "../components/Badges";

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <ProfileInfo />
      <View>
        <Badges />
      </View>
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
