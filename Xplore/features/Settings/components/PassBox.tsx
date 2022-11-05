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
      <Text variant="h4" color={"titleText"}>
        Change Password
      </Text>
      <View style={{ top: 30, left: 5 }}>
        <View>
          <Text variant="smLabel" color={"smallText"}>
            OLD PASSWORD
          </Text>
          <InputField
            lightTextColor={"titleText"}
            style={styles.InputField}
            lightBorderColor={colors.light.backgroundSecondary}
          >
            ********...
          </InputField>
        </View>
      </View>

      <View style={{ flexDirection: "row", top: 60, left: 5 }}>
        <View>
          <Text variant="smLabel" color={"smallText"}>
            NEW PASSWORD
          </Text>
          <InputField
            lightTextColor={"titleText"}
            style={styles.InputField}
            lightBorderColor={colors.light.backgroundSecondary}
          >
            ********...
          </InputField>
        </View>

        <View style={{ left: 40 }}>
          <View>
            <Text variant="smLabel" color={"smallText"}>
              CONFIRM PASSWORD
            </Text>
            <InputField
              lightTextColor={"titleText"}
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
