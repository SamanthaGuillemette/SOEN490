import styles from "./TaskIllustration.styles";
import { Image } from "react-native";
import { View } from "../../../../../components";
import { useColorScheme } from "../../../../../hooks";

export const TaskIllustration = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.main}>
      {colorScheme === "dark" ? (
        <Image
          style={styles.taskImage}
          source={require("../../../../../assets/taskillustration-dark.png")}
        />
      ) : (
        <Image
          style={styles.taskImage}
          source={require("../../../../../assets/taskillustration-light.png")}
        />
      )}
    </View>
  );
};
