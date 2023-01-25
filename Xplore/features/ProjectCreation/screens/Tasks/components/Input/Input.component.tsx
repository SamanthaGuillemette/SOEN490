import {
  InputField,
  DatePicker,
  Text,
  ShadowView,
} from "../../../../../../components";
import { useState } from "react";
import { View } from "react-native";
import styles from "./Input.styles";

export const Input = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

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
        <Text>Component for add participants</Text>
      </View>
      <View style={styles.alignLeft}>
        <Text>ADD button with checkmark</Text>
      </View>
    </ShadowView>
  );
};
