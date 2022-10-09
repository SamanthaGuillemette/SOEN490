import { Image } from "react-native";
import { ShadowView } from "../../components";
import { useColorScheme } from "../../hooks";
import styles from "./Logo.styles";

export const Logo = () => {
  const colorScheme = useColorScheme();

  return (
    <ShadowView style={styles.logo_container}>
      {colorScheme === "dark" ? (
        <Image
          style={styles.logo}
          source={require("../../assets/logo_dark.png")}
        />
      ) : (
        <Image
          style={styles.logo}
          source={require("../../assets/logo_light.png")}
        />
      )}
    </ShadowView>
  );
};
