import { View } from "react-native";
import styles from "./TechNGoals.styles";
import { Chips, InputField } from "../../../../components";

export const TechNGoals = () => {
  // const [projectGoals, setProjectGoals] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.containerTech}>
          <Chips styleBox={styles.projectTech} placeHolder={"Technologies"} />
        </View>

        <View style={styles.containerGoal}>
          <InputField
            placeHolder="Project Goals"
            styleBox={styles.projectGoals}
            styleText={styles.styleTextGoals}
            // onChangeText={(goals) => setProjectGoals(goals)}
          />
        </View>
      </View>
    </View>
  );
};
