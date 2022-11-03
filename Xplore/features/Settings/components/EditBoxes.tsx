import { StyleSheet, View } from "react-native";
import { Text } from "../../../components";
import { colors } from "../../../constants";
import { ScrollView } from "react-native";
import { InputField } from "../../../components";

const EditBoxes = () => {
  return (
    <ScrollView>
      <View style={styles.Box}>
        <Text variant="h4" lightColor={colors.light.gray100}>
          Edit Profile
        </Text>
        <View style={{ flexDirection: "row", top: 30, left: 5 }}>
          <Text variant="smLabel" lightColor={colors.light.icon}>
            USERNAME
          </Text>
          <View style={{ left: 130 }}>
            <Text variant="smLabel" lightColor={colors.light.icon}>
              LOCATION
            </Text>
          </View>
        </View>
        <View style={{ top: 50, left: 5 }}>
          <Text variant="smLabel" lightColor={colors.light.icon}>
            EMAIL
          </Text>
        </View>
      </View>

      <View style={styles.InputField}>
        <Text variant="body" lightColor={colors.dark.gray300}>
          Task Name
        </Text>
      </View>
      <InputField backgroundColor={"0961F5"} textColor={"gray300"}>
        Test
      </InputField>
    </ScrollView>
  );
};

export default EditBoxes;

const styles = StyleSheet.create({
  InputField: {
    backgroundColor: "rgba(9, 97, 245, 0.05)",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    shadowColor: "rgba(9, 97, 245, 0.1)",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    boxShadow: "inset 0px 0px 12px rgba(9, 97, 245, 0.1)",
    borderRadius: 4,
    height: 150,
    width: 150,
  },
  Box: {
    height: 230,
    width: 330,
    borderRadius: 8,
    marginTop: 16,
    backgroundColor: colors.light.backgroundSecondary,
    paddingTop: 30,
    paddingLeft: 25,
    left: 43,
  },
});
