import { View } from "react-native";
import { Text } from "../../../components";
import { InputField, ShadowView } from "../../../components";
import styles from "./EditBox.styles";
import { useThemeColor } from "../../../hooks";

const EditProfileBox = () => {
  const whiteBackground = useThemeColor("backgroundSecondary");

  return (
    <ShadowView
      style={[
        styles.Box,
        { height: 203, width: 325, backgroundColor: whiteBackground },
      ]}
    >
      <Text variant="h4" color={"gray100"}>
        Edit Profile
      </Text>
      <View style={{ flexDirection: "row", top: 30, left: 5 }}>
        <View>
          <Text variant="smLabel" color={"gray300"}>
            USERNAME
          </Text>
          <InputField
            backgroundColor={"primaryBackground"}
            textColor={"gray100"}
            style={styles.InputField}
          >
            JoshLewis123
          </InputField>
        </View>

        <View style={{ left: 40 }}>
          <View>
            <Text variant="smLabel" color={"gray300"}>
              LOCATION
            </Text>
            <InputField
              backgroundColor={"primaryBackground"}
              textColor={"gray100"}
              style={styles.InputField}
            >
              Montréal, Qc
            </InputField>
          </View>
        </View>
      </View>
      <View style={{ top: 60, left: 5 }}>
        <View>
          <Text variant="smLabel" color={"gray300"}>
            EMAIL
          </Text>
          <InputField
            backgroundColor={"primaryBackground"}
            textColor={"gray100"}
            style={styles.InputField}
          >
            example@...
          </InputField>
        </View>
      </View>
    </ShadowView>
  );
};

export default EditProfileBox;
