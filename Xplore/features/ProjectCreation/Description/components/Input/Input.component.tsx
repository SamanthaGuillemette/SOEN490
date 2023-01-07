import * as React from "react";
import { InputField, CustomCalendar, Button } from "../../../../../components";
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

      <View style={styles.positionRelative}>
        <View style={styles.positionProjDesc}>
          <View style={styles.containerAbsolute}>
            <InputField style={styles.projectDesc} styleText={styles.styleText}>
              Project description
            </InputField>
          </View>

          <View style={styles.containerAbsolute}>
            <Button
              backgroundColor="primary"
              textColor="generalGray"
              style={styles.nextBtn}
            >
              NEXT
            </Button>
          </View>
        </View>

        <CustomCalendar title="Start" style={styles.alignLeft} />
      </View>
    </View>
  );
};
