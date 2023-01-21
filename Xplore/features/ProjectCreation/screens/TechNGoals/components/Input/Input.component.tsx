import { InputField, Chips } from "../../../../../../components";
import { View } from "react-native";
import styles from "./Input.styles";

export const Input = () => {
  return (
    <View style={styles.positionRelative}>
      <View style={styles.container}>
        <InputField
          placeHolder="J"
          styleBox={styles.projectTech}
          styleText={styles.styleTextTech}
        />
      </View>

      <Chips placeHolder={"Technologies"} />

      <View style={styles.container}>
        <InputField
          placeHolder="Project Goals"
          styleBox={styles.projectGoals}
          styleText={styles.styleTextGoals}
        />
      </View>
    </View>
  );
};
