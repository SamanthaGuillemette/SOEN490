import { View } from "react-native";
import styles from "./CategoryNGoals.styles";
import { CategoryModal, InputField, Text } from "../../../../components";
import { useState } from "react";

export const CategoryNGoals = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [categoryText, setCategoryText] = useState("Category");

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

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.containerTech}>
          <Text color="titleText" variant="h3" style={styles.categoryTitle}>
            Category
          </Text>
          <CategoryModal
            label={categoryText}
            options={sortedOptions}
            onValueChange={handleValueChange}
          />
        </View>

        <View style={styles.containerGoal}>
          <InputField
            placeHolder="Project Goal #1"
            styleText={styles.styleTextGoals}
          />
        </View>
        <View style={styles.containerGoal}>
          <InputField
            placeHolder="Project Goal #2"
            styleText={styles.styleTextGoals}
          />
        </View>
        <View style={styles.containerGoal}>
          <InputField
            placeHolder="Project Goal #3"
            styleText={styles.styleTextGoals}
          />
        </View>
      </View>
    </View>
  );
};
