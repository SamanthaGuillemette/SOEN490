import { Image } from "react-native";
import { ShadowView } from "../../components";
import styles from "./Logo.styles";

export const Logo = () => {
  return (
    <ShadowView style={styles.logo_container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
    </ShadowView>
  );
};
