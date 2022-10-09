import { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { View, Logo, ShadowView } from "../../../components";
import { SegmentedButton } from "../../../components/SegmentedButton";
import styles from "./Sign.styles";
import SignIn from "./SignIn/SignIn.screen";
import SignUp from "./SignUp/SignUp.screen";

const Sign = () => {
  const [screen, setScreen] = useState(0);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.sign_container}>
          <ShadowView style={styles.logo_container}>
            <Logo />
          </ShadowView>
          <SegmentedButton
            labels={["SIGN IN", "SIGN UP"]}
            setIndex={setScreen}
          />
          {screen === 0 && <SignIn />}
          {screen === 1 && <SignUp />}
        </View>
      </ScrollView>
    </View>
  );
};

export default Sign;
