import { View } from "react-native";
import { Text } from "../../../components";
import { LabelledInputField, ShadowView } from "../../../components";
import styles from "./EditBox.styles";

const EditProfileBox = () => {
  return (
    <ShadowView style={styles.Box} isInnerShadow={false}>
      <Text variant="h4" color={"titleText"}>
        Edit Profile
      </Text>
      <View style={{ flexDirection: "row", top: 30, left: 5 }}>
        <View>
          <LabelledInputField
            labelTitle="USERNAME"
            placeHolder="JoshLewis123"
            styleBox={styles.InputField}
          />
        </View>

        <View style={{ left: 40 }}>
          <LabelledInputField
            labelTitle="LOCATION"
            placeHolder="Montréal, Qc"
            styleBox={styles.InputField}
          />
        </View>
      </View>
      <View style={{ top: 60, left: 5 }}>
        <LabelledInputField
          labelTitle="email"
          placeHolder="example@..."
          styleBox={styles.InputField}
        />
      </View>
    </ShadowView>
  );
};

export default EditProfileBox;
