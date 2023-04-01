import { View } from "react-native";
import styles from "./CategoryNGoals.styles";
import { CategoryModal, InputField, Text } from "../../../../components";
import { useState } from "react";
import { categories } from "../../../../constants";

interface CategoryNGoalsProps {
  setCategory: (category: string) => void;
  setGoals: (value: string[]) => void;
}

export const CategoryNGoals = (props: CategoryNGoalsProps) => {

  const [categoryText, setCategoryText] = useState("Category");
  const [goal1, setGoal1] = useState("");
  const [goal2, setGoal2] = useState("");
  const [goal3, setGoal3] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  const handleValueChange = (label: string) => {
    props.setCategory(label);
    const selectedOption = options.find((option) => option.label === label);
    setCategoryText(selectedOption?.label || "Category");
    setTaskCategory(label);
  };

  const options = [
    { label: categories.frontendDev, value: "option1" },
    { label: categories.backendDev, value: "option2" },
    { label: categories.webDev, value: "option3" },
    { label: categories.mobileDev, value: "option4" },
    { label: categories.gameDev, value: "option5" },
    { label: categories.embeddedSystems, value: "option6" },
    { label: categories.algorithms, value: "option7" },
    { label: categories.softwareOptimization, value: "option8" },
    { label: categories.security, value: "option9" },
    { label: categories.blockchain, value: "option10" },
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
          setCategory={setTaskCategory}
          onChangeText={(category) => props.setCategory(category)}
        />
      </View>

      <View style={styles.containerGoal}>
        <InputField
          placeHolder="Project Goal #1"
          styleText={styles.styleTextGoals}
          onChangeText={(goal) => handleGoalChange(1, goal)}
        />
      </View>
      <View style={styles.containerGoal}>
        <InputField
          placeHolder="Project Goal #2"
          styleText={styles.styleTextGoals}
          onChangeText={(goal) => handleGoalChange(2, goal)}
        />
      </View>
      <View style={styles.containerGoal}>
        <InputField
          placeHolder="Project Goal #3"
          styleText={styles.styleTextGoals}
          onChangeText={(goal) => handleGoalChange(3, goal)}
        />
      </View>
    </View>
  );
};
