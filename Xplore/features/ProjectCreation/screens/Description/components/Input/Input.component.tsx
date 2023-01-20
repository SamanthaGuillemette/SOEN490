import { InputField, DatePicker } from "../../../../../../components";
import { useState } from "react";
import { View } from "react-native";
import styles from "./Input.styles";

export const Input = () => {
  const [projName, setProjName] = useState("");
  const [projDesc, setProjDesc] = useState("");

  return (
    <View>
      <View style={[styles.container, styles.alignProjectName]}>
        <InputField
          placeHolder="Project name"
          styleBox={styles.projectName}
          styleText={styles.styleText}
          onChangeText={(name) => setProjName(name)}
        />
      </View>

      <DatePicker title="Start" style={styles.alignLeft} />

      <View style={styles.container}>
        <InputField
          placeHolder="Project description"
          styleBox={styles.projectDesc}
          styleText={styles.styleText}
          onChangeText={(desc) => setProjDesc(desc)}
        />
      </View>
    </View>
  );
};
