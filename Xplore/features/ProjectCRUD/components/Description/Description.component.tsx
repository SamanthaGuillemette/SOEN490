import { TouchableOpacity, View } from "react-native";
import { useState } from "react";
import styles from "./Description.styles";
import {
  DatePicker,
  Icon,
  InputField,
  ShadowView,
} from "../../../../components";
import { useRoute } from "@react-navigation/native";

export const Description = () => {
  const route = useRoute();
  let { projectInfo }: any = route.params;
  const [projName, setProjName] = useState(projectInfo.name);
  const [projDesc, setProjDesc] = useState(projectInfo.description);
  const [startDate, setStartDate] = useState(
    projectInfo.startDate !== ""
      ? projectInfo.startDate.substring(0, projectInfo.startDate.indexOf("T"))
      : "YYYY-MM-DD"
  );
  const [endDate, setEndDate] = useState(
    projectInfo.endDate !== ""
      ? projectInfo.endDate.substring(0, projectInfo.endDate.indexOf("T"))
      : "YYYY-MM-DD"
  );

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
            value={projName}
            onChangeText={(name) => setProjName(name)}
          />
        </View>

        <DatePicker
          title="Start"
          defaultDate={startDate}
          style={styles.dateAlign}
        />
        <DatePicker
          title="End"
          defaultDate={endDate}
          style={styles.dateAlign}
        />

        <View style={styles.containerTextInputDesc}>
          <InputField
            placeHolder="Project description"
            styleText={styles.styleText}
            value={projDesc}
            onChangeText={(desc) => setProjDesc(desc)}
          />
        </View>
      </View>
    </View>
  );
};
