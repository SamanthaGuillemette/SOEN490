import * as React from "react";
import { InputField, Text, Button, Icon } from "../../../../components";
import { StyleSheet, View } from "react-native";
import { useThemeColor } from "../../../../hooks";

const Input = () => {
  const generalGray = useThemeColor("generalGray");

  return (
    <View>
      <View style={styles.container}>
        <InputField style={styles.projectName} styleText={{ marginTop: 13 }}>
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
        <InputField style={styles.projectDesc} styleText={{ marginTop: 14 }}>
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

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 23,
  },
  projectName: {
    width: 337,
    height: 45,
  },
  start: {
    left: 50,
    top: 18,
  },
  startDate: {
    left: 57,
    top: 30,
  },
  calendar: {
    left: 125,
    top: 5,
  },
  line: {
    width: 93,
    height: 1,
    left: 57,
    top: 8,
  },
  projectDesc: {
    width: 337,
    height: 111,
  },
  nextBtn: {
    width: 300,
    height: 50,
    borderRadius: 25,
    marginTop: 57,
  },
});
