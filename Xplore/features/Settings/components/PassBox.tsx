import { View } from "react-native";
import { Text } from "../../../components";
import { LabelledInputField, ShadowView } from "../../../components";
import styles from "./EditBox.styles";

const PassBox = () => {
  return (
    <ShadowView style={styles.Box} isInnerShadow={false}>
      <Text variant="h4" color={"titleText"}>
        Change Password
      </Text>
      <View style={{ top: 30, left: 5 }}>
        <LabelledInputField
          labelTitle="OLD PASSWORD"
          placeHolder="********..."
          styleBox={styles.InputField}
        />
      </View>

      <View style={{ flexDirection: "row", top: 60, left: 5 }}>
        <View>
          <LabelledInputField
            labelTitle="NEW PASSWORD"
            placeHolder="********..."
            styleBox={styles.InputField}
          />
        </View>

        <View style={{ left: 40 }}>
          <LabelledInputField
            labelTitle="CONFIRM PASSWORD"
            placeHolder="********..."
            styleBox={styles.InputField}
          />
        </View>
      </View>
    </ShadowView>
  );
};

export default PassBox;
