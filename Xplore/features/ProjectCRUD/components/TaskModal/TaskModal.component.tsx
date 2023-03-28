import { useState } from "react";
import { Alert, View } from "react-native";
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
  const [allMembers, setAllMembers] = useState<any[]>([]);
  // const [setTask] = useState("");
  // const userName = useState("");
  const primaryBackground = useThemeColor("primaryBackground");
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const formattedToday = yyyy + "-" + mm + "-" + dd;

  const [btnClicked, setBtnClicked] = useState(false);
  const { onPress, tasks, setTasks } = props;
  const [categoryText, setCategoryText] = useState("Category");

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

  const handleValueChange = (label: string) => {
    setTaskCategory(label);
    const selectedOption = options.find((option) => option.label === label);
    setCategoryText(selectedOption?.label || "Category");
  };

  const handleEmptyValues = (
    taskName: any,
    taskDesc: any,
    categoryText: any,
    startDate: any,
    endDate: any
  ) => {
    if (
      taskName.trim().length === 0 ||
      taskDesc.trim().length === 0 ||
      categoryText === "Category" ||
      startDate.trim().length === 0 ||
      endDate.trim().length === 0
    ) {
      Alert.alert("You are missing required fields!");
    } else {
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
    }
  };

  const handleStartDate = (sDate: string) => {
    if (sDate < formattedToday) {
      Alert.alert("Invalid start date. Must occur today or in the future.");
      setStartDate("");
    } else if (endDate !== "") {
      if (sDate > endDate) {
        Alert.alert("Invalid start date. Must occur before end date.");
        setStartDate("");
      } else {
        setStartDate(sDate);
      }
    } else {
      setStartDate(sDate);
    }
  };

  const handleEndDate = (eDate: string) => {
    if (eDate <= formattedToday) {
      Alert.alert("Invalid end date. Must occur after today.");
      setEndDate("");
    } else if (startDate !== "") {
      if (eDate > startDate) {
        setEndDate(eDate);
      } else {
        Alert.alert("Invalid end date. Must occur after start date.");
        setEndDate("");
      }
    } else {
      setEndDate(eDate);
    }
  };

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
        <DatePicker title="Starts" setDate={handleStartDate} />
        <DatePicker title="Ends" setDate={handleEndDate} />
      </View>

      <ShadowView style={[styles.button]}>
        <TouchableOpacity
          style={[
            { backgroundColor: primaryBackground },
            styles.alignTouchable,
          ]}
          onPress={async () => {
            handleEmptyValues(
              taskName,
              taskDesc,
              categoryText,
              startDate,
              endDate
            );
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
