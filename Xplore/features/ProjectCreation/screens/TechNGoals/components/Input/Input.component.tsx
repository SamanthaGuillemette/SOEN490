import { InputField, Chips } from "../../../../../../components";
import { View } from "react-native";
import styles from "./Input.styles";

export const Input = () => {
  return (
    <View>
      <View style={styles.container}>
        <Chips styleBox={styles.projectTech} placeHolder={"Technologies"} />
      </View>

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
