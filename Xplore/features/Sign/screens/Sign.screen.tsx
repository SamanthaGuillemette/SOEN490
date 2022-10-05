import { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import { Logo } from "../../../components/Logo";
import { SegmentedButton } from "../../../components/SegmentedButton";
import SignIn from "./SignIn.screen";
import SignUp from "./SignUp.screen";

const Sign = () => {
  const [screen, setScreen] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.sign_container}>
          <Logo />
          <SegmentedButton
            labels={["SIGN IN", "SIGN UP"]}
            setIndex={setScreen}
          />
          {screen === 0 && <SignIn />}
          {screen === 1 && <SignUp />}
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
