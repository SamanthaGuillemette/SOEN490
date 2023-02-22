import { useState } from "react";
import { ScrollView } from "react-native";
import { View, Logo, ShadowView } from "../../../components";
import { SegmentedButton } from "../../../components/SegmentedButton";
import styles from "./Sign.styles";
import SignIn from "../components/SignIn/SignIn.screen";
import SignUp from "../components/SignUp/SignUp.screen";
import { NavigationProp } from "@react-navigation/native";

interface SignProps {
  navigation: NavigationProp<any>;
}

const Sign = (props: SignProps) => {
  const { navigation } = props;
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
          {screen === 0 && <SignIn navigation={navigation} />}
          {screen === 1 && (
            <SignUp navigation={navigation} setScreen={setScreen} />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Sign;
