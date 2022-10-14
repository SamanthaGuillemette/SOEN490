import { View, Image } from "react-native";
import { useColorScheme } from "../../hooks";
import styles from "./Logo.styles";

export const Logo = () => {
  const colorScheme = useColorScheme();

  return (
    <View>
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
    </View>
  );
};
