import { View } from "react-native";
import { Text } from "../../../components";
import { InputField, ShadowView } from "../../../components";
import styles from "./EditBox.styles";
import { colors } from "../../../constants";

const PassBox = () => {
  return (
    <ShadowView
      style={[styles.Box, { height: 203, width: 325 }]}
      isInnerShadow={false}
    >
      <Text variant="h4" color={"gray100"}>
        Change Password
      </Text>
      <View style={{ top: 30, left: 5 }}>
        <View>
          <Text variant="smLabel" color={"gray300"}>
            OLD PASSWORD
          </Text>
          <InputField
            textColor={"background"}
            style={styles.InputField}
            lightBorderColor={colors.light.backgroundSecondary}
          >
            ********...
          </InputField>
        </View>
      </View>

      <View style={{ flexDirection: "row", top: 60, left: 5 }}>
        <View>
          <Text variant="smLabel" color={"gray300"}>
            NEW PASSWORD
          </Text>
          <InputField
            textColor={"background"}
            style={styles.InputField}
            lightBorderColor={colors.light.backgroundSecondary}
          >
            ********...
          </InputField>
        </View>

        <View style={{ left: 40 }}>
          <View>
            <Text variant="smLabel" color={"gray300"}>
              CONFIRM PASSWORD
            </Text>
            <InputField
              textColor={"background"}
              style={styles.InputField}
              lightBorderColor={colors.light.backgroundSecondary}
            >
              ********...
            </InputField>
          </View>
        </View>
      </View>
    </ShadowView>
  );
};

export default PassBox;
