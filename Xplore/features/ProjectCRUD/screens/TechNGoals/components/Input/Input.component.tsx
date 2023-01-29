import { InputField, Chips } from "../../../../../../components";
import { View } from "react-native";
import { useState } from "react";
import styles from "./Input.styles";

export const Input = () => {
  const [projectGoals, setProjectGoals] = useState("");

  return (
    <View>
      <View style={styles.container2}>
        <Chips styleBox={styles.projectTech} placeHolder={"Technologies"} />
      </View>

      <View style={styles.container}>
        <InputField
          placeHolder="Project Goals"
          styleBox={styles.projectGoals}
          styleText={styles.styleTextGoals}
          onChangeText={(goals) => setProjectGoals(goals)}
        />
      </View>
    </View>
  );
};
