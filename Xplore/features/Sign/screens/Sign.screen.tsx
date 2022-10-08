import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Logo } from "../../../components/Logo";
import { SegmentedButton } from "../../../components/SegmentedButton";
import styles from "./Sign.styles";
import SignIn from "./SignIn/SignIn.screen";
import SignUp from "./SignUp/SignUp.screen";

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
