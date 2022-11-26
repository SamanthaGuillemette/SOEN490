import * as React from "react";
import { InputField, Text, Button, Icon } from "../../../../../components";
import { View } from "react-native";
import styles from "./Input.styles";
import { useThemeColor } from "../../../../../hooks";

const Input = () => {
  const generalGray = useThemeColor("generalGray");

  return (
    <View>
      <View style={styles.container}>
        <InputField style={styles.projectName} styleText={styles.styleText}>
          Project name
        </InputField>
      </View>
      <Text color="titleText" variant="h3" style={styles.start}>
        Start
      </Text>
      <Text color="bodyText" variant="label" style={styles.startDate}>
        13/12/2022
      </Text>
      <Icon name="calendar" size="large" style={styles.calendar} />
      <View style={[styles.line, { backgroundColor: generalGray }]} />
      <View style={styles.container}>
        <InputField style={styles.projectDesc} styleText={styles.styleText}>
          Project description
        </InputField>
      </View>
      <View style={styles.container}>
        <Button
          backgroundColor="primary"
          textColor="generalGray"
          style={styles.nextBtn}
        >
          NEXT
        </Button>
      </View>
    </View>
  );
};

export default Input;
