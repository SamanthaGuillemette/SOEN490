import { View } from "react-native";
import styles from "./CategoryNGoals.styles";
import { CategoryModal, InputField, Text } from "../../../../components";
import { useState } from "react";

interface CategoryNGoalsProps {
  setCategory: (category: string) => void;
  setGoals: (value: string[]) => void;
}

export const CategoryNGoals = (props: CategoryNGoalsProps) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [categoryText, setCategoryText] = useState("Category");
  const [goal1, setGoal1] = useState("");
  const [goal2, setGoal2] = useState("");
  const [goal3, setGoal3] = useState("");

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    const selectedOption = options.find((option) => option.value === value);
    setCategoryText(selectedOption?.label || "Category");
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

  const sortedOptions = options.sort((a, b) => a.label.localeCompare(b.label));

  // Update the goals array when any of the project goals is changed
  const handleGoalChange = (goalIndex: number, goalValue: string) => {
    switch (goalIndex) {
      case 1:
        setGoal1(goalValue);
        break;
      case 2:
        setGoal2(goalValue);
        break;
      case 3:
        setGoal3(goalValue);
        break;
    }
    props.setGoals([goal1, goal2, goal3]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTech}>
        <Text color="titleText" variant="h3" style={styles.categoryTitle}>
          Category
        </Text>
        <CategoryModal
          label={categoryText}
          options={sortedOptions}
          onValueChange={handleValueChange}
          onChangeText={(category) => props.setCategory(category)}
        />
      </View>

      <View style={styles.containerGoal}>
        <InputField
          placeHolder="Project Goal #1"
          styleText={styles.styleTextGoals}
          onChangeText={(goal1) => handleGoalChange(1, goal1)}
        />
      </View>
      <View style={styles.containerGoal}>
        <InputField
          placeHolder="Project Goal #2"
          styleText={styles.styleTextGoals}
          onChangeText={(goal2) => handleGoalChange(2, goal2)}
        />
      </View>
      <View style={styles.containerGoal}>
        <InputField
          placeHolder="Project Goal #3"
          styleText={styles.styleTextGoals}
          onChangeText={(goal3) => handleGoalChange(3, goal3)}
        />
      </View>
    </View>
  );
};
