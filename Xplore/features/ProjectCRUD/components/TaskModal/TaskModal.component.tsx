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
  const test = useThemeColor("errorBackground");

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
          <InputField
            placeHolder="Add a category"
            styleText={styles.styleText}
            onChangeText={(name) => setTaskCategory(name)}
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
