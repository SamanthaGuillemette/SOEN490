import { View } from "react-native";
import { Text } from "../../../components";
import { colors } from "../../../constants";
import { InputField } from "../../../components";
import styles from "./EditBox.styles";

const EditProfileBox = () => {
  return (
    <View style={[styles.Box, { height: 203, width: 325 }]}>
      <Text variant="h4" lightColor={colors.light.gray100}>
        Edit Profile
      </Text>
      <View style={{ flexDirection: "row", top: 30, left: 5 }}>
        <View>
          <Text variant="smLabel" lightColor={colors.light.gray300}>
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
            <Text variant="smLabel" lightColor={colors.light.gray300}>
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
          <Text variant="smLabel" lightColor={colors.light.gray300}>
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
    </View>
  );
};

export default EditProfileBox;
