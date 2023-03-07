import { useState } from "react";
import { View } from "react-native";
import styles from "./TaskModal.styles";
import { TouchableOpacity } from "react-native";
import {
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

  return (
    <ShadowView style={styles.shadowView}>
      <View style={styles.alignLeft}>
        <Text color="titleText" variant="h3">
          About
        </Text>
      </View>
      <View style={styles.container}>
        <InputField
          placeHolder="Task name"
          styleBox={styles.taskName}
          styleText={styles.styleText}
          onChangeText={(name) => setTaskName(name)}
        />
      </View>
      <View style={styles.container}>
        <InputField
          placeHolder="Task description"
          styleBox={styles.taskDesc}
          styleText={styles.styleText}
          onChangeText={(desc) => setTaskDesc(desc)}
        />
      </View>
      <View style={styles.container}>
        <InputField
          placeHolder="Add a category"
          styleBox={styles.taskCategory}
          styleText={styles.styleText}
          onChangeText={(name) => setTaskCategory(name)}
        />
      </View>
      <View style={styles.alignDatePicker}>
        <DatePicker title="Starts" style={styles.alignLeft} />
        <DatePicker title="Ends" style={styles.alignRight} />
      </View>
      <View style={styles.alignLeft}>
        <Text color="titleText" variant="h3">
          Participants
        </Text>

        {/* Testing the component, will be adjusted */}
      </View>

      <MemberChipAdder />
      <ShadowView
        style={[styles.button, { backgroundColor: primaryBackground }]}
      >
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
