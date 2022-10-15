import { StyleSheet, View } from "react-native";
import { Text } from "../../../components";
import { colors } from "../../../constants";
import { ScrollView } from "react-native";

const Edit_Boxes = () => {
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
    </ScrollView>
  );
};

export default Edit_Boxes;

const styles = StyleSheet.create({
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
