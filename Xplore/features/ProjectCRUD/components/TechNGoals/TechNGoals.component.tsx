import { View } from "react-native";
import styles from "./TechNGoals.styles";
import { Chips, InputField } from "../../../../components";

export const TechNGoals = () => {
  // const [projectGoals, setProjectGoals] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.containerTech}>
          <Chips placeHolder={"Technologies"} />
        </View>

        <View style={styles.containerGoal}>
          <InputField
            placeHolder="Project Goal #1"
            styleText={styles.styleTextGoals}
            // onChangeText={(goals) => setProjectGoals(goals)}
          />
        </View>
        <View style={styles.containerGoal}>
          <InputField
            placeHolder="Project Goal #2"
            styleText={styles.styleTextGoals}
            // onChangeText={(goals) => setProjectGoals(goals)}
          />
        </View>
        <View style={styles.containerGoal}>
          <InputField
            placeHolder="Project Goal #3"
            styleText={styles.styleTextGoals}
            // onChangeText={(goals) => setProjectGoals(goals)}
          />
        </View>
      </View>
    </View>
  );
};
