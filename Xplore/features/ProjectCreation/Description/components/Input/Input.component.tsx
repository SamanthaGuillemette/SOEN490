import * as React from "react";
import { InputField, CustomCalendar } from "../../../../../components";
import { View } from "react-native";
import styles from "./Input.styles";

export const Input = () => {
  return (
    <View>
      <View style={styles.container}>
        <InputField style={styles.projectName} styleText={styles.styleText}>
          Project name
        </InputField>
      </View>

      <CustomCalendar title="Start" style={styles.alignLeft} />

      <View style={styles.container}>
        <InputField style={styles.projectDesc} styleText={styles.styleText}>
          Project description
        </InputField>
      </View>
    </View>
  );
};
