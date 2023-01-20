import * as React from "react";
import { InputField, DatePicker } from "../../../../../../components";
import { View } from "react-native";
import styles from "./Input.styles";

export const Input = () => {
  return (
    <View>
      <View style={[styles.container, styles.alignProjectName]}>
        <InputField styleBox={styles.projectName} styleText={styles.styleText}>
          Project name
        </InputField>
      </View>

      <DatePicker title="Start" style={styles.alignLeft} />

      <View style={styles.container}>
        <InputField styleBox={styles.projectDesc} styleText={styles.styleText}>
          Project description
        </InputField>
      </View>
    </View>
  );
};
