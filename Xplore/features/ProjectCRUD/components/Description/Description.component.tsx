import { TouchableOpacity, View } from "react-native";
import styles from "./Description.styles";
import {
  DatePicker,
  Icon,
  InputField,
  ShadowView,
} from "../../../../components";

export const Description = () => {
  // const [projName, setProjName] = useState("");
  // const [projDesc, setProjDesc] = useState("");

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
        <View style={[styles.containerTextInput, styles.alignProjectName]}>
          <InputField
            placeHolder="Project name"
            styleBox={styles.projectName}
            styleText={styles.styleText}
            // onChangeText={(name) => setProjName(name)}
          />
        </View>

        <DatePicker title="Start" style={styles.alignLeft} />

        <View style={styles.containerTextInput}>
          <InputField
            placeHolder="Project description"
            styleBox={styles.projectDesc}
            styleText={styles.styleText}
            // onChangeText={(desc) => setProjDesc(desc)}
          />
        </View>
      </View>
    </View>
  );
};
