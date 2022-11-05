import { View } from "react-native";
import { Text } from "../../../components";
import { InputField, ShadowView } from "../../../components";
import styles from "./EditBox.styles";
import { useThemeColor } from "../../../hooks";

const PassBox = () => {
  const whiteBackground = useThemeColor("backgroundSecondary");

  return (
    <ShadowView
      style={[
        styles.Box,
        { height: 203, width: 325, backgroundColor: whiteBackground },
      ]}
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
          <Text variant="smLabel" color={"gray300"}>
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
            <Text variant="smLabel" color={"gray300"}>
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
