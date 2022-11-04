import { View } from "react-native";
import { Text } from "../../../components";
import { colors } from "../../../constants";
import { InputField, ShadowView } from "../../../components";
import styles from "./EditBox.styles";

const PassBox = () => {
  return (
    <ShadowView style={[styles.Box, { height: 203, width: 325 }]}>
      <Text variant="h4" lightColor={colors.light.gray100}>
        Change Password
      </Text>
      <View style={{ top: 30, left: 5 }}>
        <View>
          <Text variant="smLabel" lightColor={colors.light.gray300}>
            OLD PASSWORD
          </Text>
          <InputField
            backgroundColor={"primaryBackground"}
            textColor={"gray100"}
            style={styles.InputField}
          >
            ********...
          </InputField>
        </View>
      </View>

      <View style={{ flexDirection: "row", top: 60, left: 5 }}>
        <View>
          <Text variant="smLabel" lightColor={colors.light.gray300}>
            NEW PASSWORD
          </Text>
          <InputField
            backgroundColor={"primaryBackground"}
            textColor={"gray100"}
            style={styles.InputField}
          >
            ********...
          </InputField>
        </View>

        <View style={{ left: 40 }}>
          <View>
            <Text variant="smLabel" lightColor={colors.light.gray300}>
              CONFIRM PASSWORD
            </Text>
            <InputField
              backgroundColor={"primaryBackground"}
              textColor={"gray100"}
              style={styles.InputField}
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
