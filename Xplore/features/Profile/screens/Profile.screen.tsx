import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import ProfileInfo from "../components/ProfileInfo";
import { ScrollView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { Button } from "react-native-paper";

interface ProfileProps {
  navigation: NavigationProp<any>;
}

const Profile = (props: ProfileProps) => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <ScrollView>
        <ProfileInfo />
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
