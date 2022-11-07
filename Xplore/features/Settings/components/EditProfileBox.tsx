import { View } from "react-native";
import { Text } from "../../../components";
import { InputField, ShadowView } from "../../../components";
import styles from "./EditBox.styles";
import { colors } from "../../../constants";

const EditProfileBox = () => {
  return (
    <ShadowView
      style={[styles.Box, { height: 203, width: 325 }]}
      isInnerShadow={false}
    >
      <Text variant="h4" color={"titleText"}>
        Edit Profile
      </Text>
      <View style={{ flexDirection: "row", top: 30, left: 5 }}>
        <View>
          <Text variant="smLabel" color={"smallText"}>
            USERNAME
          </Text>
          <InputField
            lightTextColor={"titleText"}
            style={styles.InputField}
            lightBorderColor={colors.light.backgroundSecondary}
          >
            JoshLewis123
          </InputField>
        </View>

        <View style={{ left: 40 }}>
          <View>
            <Text variant="smLabel" color={"smallText"}>
              LOCATION
            </Text>
            <InputField
              lightTextColor={"titleText"}
              style={styles.InputField}
              lightBorderColor={colors.light.backgroundSecondary}
            >
              Montréal, Qc
            </InputField>
          </View>
        </View>
      </View>
      <View style={{ top: 60, left: 5 }}>
        <View>
          <Text variant="smLabel" color={"smallText"}>
            EMAIL
          </Text>
          <InputField
            lightTextColor={"titleText"}
            style={styles.InputField}
            lightBorderColor={colors.light.backgroundSecondary}
          >
            example@...
          </InputField>
        </View>
      </View>
    </ShadowView>
  );
};

export default EditProfileBox;
