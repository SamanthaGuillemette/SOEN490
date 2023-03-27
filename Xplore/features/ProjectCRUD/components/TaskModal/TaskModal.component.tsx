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
  setTasks: (value: Object[]) => void;
  tasks: Object[];
}

export const TaskModal = (props: TaskModalProps) => {
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  // const [setTask] = useState("");
  // const userName = useState("");
  const primaryBackground = useThemeColor("primaryBackground");

  const [btnClicked, setBtnClicked] = useState(false);
  const { onPress, tasks, setTasks } = props;

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

  const [categoryText, setCategoryText] = useState("Category");

  const handleValueChange = (label: string) => {
    setTaskCategory(label);
    const selectedOption = options.find((option) => option.label === label);
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

  // const { data, status } = useCreateNewTask();
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
            setCategory={setTaskCategory}
          />
        </View>
      </View>
      <View style={styles.alignDatePicker}>
        <DatePicker title="Starts" setDate={setStartDate} />
        <DatePicker title="Ends" setDate={setEndDate} />
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
          onPress={async () => {
            added();
            reset();
            const newTask = {
              name: taskName,
              description: taskDesc,
              category: taskCategory,
              startDate: startDate,
              endDate: endDate,
            };
            console.log(newTask);
            setTasks([...tasks, newTask]);
            console.log(tasks);
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
