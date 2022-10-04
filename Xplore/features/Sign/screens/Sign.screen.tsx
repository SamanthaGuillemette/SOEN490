import * as React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import { Solgan } from "../../../components/Solgan";
import { SegmentedButton } from "../../../components/SegmentedButton";
import SignIn from "./SignIn.screen";
import SignUp from "./SignUp.screen";
interface SignProps {}

const Sign = ({}: SignProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.sign_container}>
          <Solgan />
          <SegmentedButton />
          <SignUp />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Sign;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: 20,
  },
  sign_container: {
    alignItems: "center",
  },
});
