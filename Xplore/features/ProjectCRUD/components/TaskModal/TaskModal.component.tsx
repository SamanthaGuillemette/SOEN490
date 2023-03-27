import { useState } from "react";
import { View } from "react-native";
import styles from "./TaskModal.styles";
import { TouchableOpacity } from "react-native";
import {
  CategoryModal,
  DatePicker,
  Icon,
  InputField,
  MemberChipAdder,
  ShadowView,
  Text,
} from "../../../../components";
import { useThemeColor } from "../../../../hooks";

interface TaskModalProps {
  onPress?: any;
}

export const TaskModal = (props: TaskModalProps) => {
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  // const userName = useState("");
  const primaryBackground = useThemeColor("primaryBackground");

  const [btnClicked, setBtnClicked] = useState(false);
  const { onPress } = props;

  const added = () => {
    setBtnClicked(true);

    setTimeout(() => {
      setBtnClicked(false);
      onPress === undefined ? "" : onPress();
    }, 2000);
  };

  const reset = () => {
    setTaskName("");
    setTaskDesc("");
    setTaskCategory("");
  };

  const [selectedValue, setSelectedValue] = useState("");
  const [categoryText, setCategoryText] = useState("Category");

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    const selectedOption = options.find((option) => option.value === value);
    setCategoryText(selectedOption?.label || "Category");
  };

  const options = [
    { label: "Meeting", value: "option1" },
    { label: "Planning-Research", value: "option2" },
    { label: "Planning-Budget", value: "option3" },
    { label: "Design-UI design", value: "option4" },
    { label: "Design-Brainstorming", value: "option5" },
    { label: "Development-Frontend", value: "option6" },
    { label: "Development-Backend", value: "option7" },
    { label: "Testing-unit testing", value: "option8" },
    { label: "Testing-System Testing", value: "option9" },
    { label: "Deployment", value: "option10" },
  ];

  const sortedOptions = options.sort((a, b) => a.label.localeCompare(b.label));

  return (
    <ShadowView style={styles.shadowView}>
      <View style={styles.textViewAbout}>
        <Text color="titleText" variant="h3">
          About
        </Text>
      </View>
      <View style={styles.inputFields}>
        <View style={styles.containerTaskName}>
          <InputField
            placeHolder="Task name"
            styleText={styles.styleText}
            onChangeText={(name) => setTaskName(name)}
          />
        </View>
        <View style={styles.containerTaskDesc}>
          <InputField
            placeHolder="Task description"
            styleText={styles.styleText}
            onChangeText={(desc) => setTaskDesc(desc)}
          />
        </View>
        <View style={styles.containerTaskCat}>
          <CategoryModal
            label={categoryText}
            options={sortedOptions}
            onValueChange={handleValueChange}
          />
        </View>
      </View>
      <View style={styles.alignDatePicker}>
        <DatePicker title="Starts" />
        <DatePicker title="Ends" />
      </View>
      <View style={styles.textViewParticipant}>
        <Text color="titleText" variant="h3">
          Participants
        </Text>
      </View>
      <MemberChipAdder />
      <ShadowView style={[styles.button]}>
        <TouchableOpacity
          style={[
            { backgroundColor: primaryBackground },
            styles.alignTouchable,
          ]}
          onPress={() => {
            added();
            reset();
          }}
        >
          <Icon
            name={btnClicked === true ? "check-circle" : "plus"}
            size="large"
            color="primary"
            style={styles.icon}
          />
        </TouchableOpacity>
      </ShadowView>
    </ShadowView>
  );
};
