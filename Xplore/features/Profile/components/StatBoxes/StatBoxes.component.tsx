import { StyleSheet, View } from "react-native";
import { Text } from "../../../../components";
import { useThemeColor } from "../../../../hooks";

export const StatBoxes = () => {
  const badgeBackground = useThemeColor("background");

  return (
    <View style={styles.Boxes}>
      <View style={[styles.Box, { backgroundColor: badgeBackground }]}>
        <Text variant="h2" color="titleText">
          5
        </Text>
        <Text variant="smBody" color="bodyText">
          Levels
        </Text>
      </View>
      <View style={[styles.Box, { backgroundColor: badgeBackground }]}>
        <Text variant="h2" color="titleText">
          8
        </Text>
        <Text variant="smBody" color="bodyText">
          Badges
        </Text>
      </View>
      <View style={[styles.Box, { backgroundColor: badgeBackground }]}>
        <Text variant="h2" color="titleText">
          12
        </Text>
        <Text variant="smBody" color="bodyText">
          Projects
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Boxes: {
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 10,
  },
  Box: {
    alignItems: "center",
    justifyContent: "center",
    width: 105,
    height: 70,
    borderRadius: 8,
    marginHorizontal: 10,
  },
});
