import { View, Image } from "react-native";
import styles from "./Logo.styles";

export const Logo = () => {
  return (
    <View style={styles.logo_container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
    </View>
  );
};
