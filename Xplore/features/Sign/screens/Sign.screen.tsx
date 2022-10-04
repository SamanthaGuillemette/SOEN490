import * as React from "react";
import { StyleSheet, SafeAreaView, View, Image } from "react-native";
import { Solgan } from "../../../components/Solgan";
import { SegmentedButton } from "../../../components/SegmentedButton";
import SignIn from "./SignIn.screen";

interface SignProps {}

const Sign = ({}: SignProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sign_container}>
        <Solgan />
        <SegmentedButton />
        <SignIn />
      </View>
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
    height: "100%",
    //backgroundColor: globalTheme.colors.screenBackground,
  },
});
