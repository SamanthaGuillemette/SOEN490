import { View } from "react-native";
import styles from "./TechNGoals.styles";
import { Chips, InputField, DropdownField, Text } from "../../../../components";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { useThemeColor } from "../../../../hooks/useThemeColor";

export const TechNGoals = () => {
  // const [projectGoals, setProjectGoals] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
  };

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.containerTech}>
          {/* <Chips placeHolder={"Technologies"} /> */}
          <Text color="titleText" variant="h3">
            Category
          </Text>
          <DropdownField
            label="Options"
            options={options}
            onValueChange={handleValueChange}
          />
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
