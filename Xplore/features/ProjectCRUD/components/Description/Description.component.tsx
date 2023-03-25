import { TouchableOpacity, View } from "react-native";
import styles from "./Description.styles";
import {
  DatePicker,
  Icon,
  InputField,
  ShadowView,
} from "../../../../components";
import { useState } from "react";

interface DescriptionProps {
  setDescription: (desc: string) => void;
  setProjectName: (name: string) => void;
}

export const Description = (props: DescriptionProps) => {
  const [date, setDate] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.editImageContainer}>
        <TouchableOpacity>
          <ShadowView style={styles.circle}>
            <Icon name="image" size="x-large" style={styles.alignImage} />
          </ShadowView>
        </TouchableOpacity>
      </View>
      <View>
        <View style={[styles.containerTextInputName, styles.alignProjectName]}>
          <InputField
            placeHolder="Project name"
            styleText={styles.styleText}
            onChangeText={(projName) => props.setProjectName(projName)}
          />
        </View>
        <DatePicker title="Start" style={styles.dateAlign} setDate={setDate} />
        <View style={styles.containerTextInputDesc}>
          <InputField
            placeHolder="Project description"
            styleText={styles.styleText}
            onChangeText={(desc) => props.setDescription(desc)}
          />
        </View>
      </View>
    </View>
  );
};
