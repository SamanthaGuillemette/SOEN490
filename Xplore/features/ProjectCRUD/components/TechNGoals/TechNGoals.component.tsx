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
    { label: "Data Science", value: "option1" },
    { label: "Web Development", value: "option2" },
    { label: "Embedded Systems", value: "option3" },
    { label: "Security Systems", value: "option4" },
    { label: "Social Networking", value: "option5" },
    { label: "Game Development", value: "option6" },
    { label: "Software Optimization", value: "option7" },
    { label: "Finance/Blockchain", value: "option8" },
    { label: "Mobile Development", value: "option9" },
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
