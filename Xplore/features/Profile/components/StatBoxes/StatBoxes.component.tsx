import { StyleSheet, View } from "react-native";
import { Text } from "../../../../components";
import { useThemeColor } from "../../../../hooks";

export const StatBoxes = () => {
  const badgeBackground = useThemeColor("background");

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.badgeBox, { backgroundColor: badgeBackground }]}>
        <Text variant="h2" color="titleText">
          5
        </Text>
        <Text variant="smBody" color="bodyText">
          Levels
        </Text>
      </View>
      <View style={[styles.badgeBox, { backgroundColor: badgeBackground }]}>
        <Text variant="h2" color="titleText">
          8
        </Text>
        <Text variant="smBody" color="bodyText">
          Badges
        </Text>
      </View>
      <View style={[styles.badgeBox, { backgroundColor: badgeBackground }]}>
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
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 30,
  },
  badgeBox: {
    alignItems: "center",
    justifyContent: "center",
    width: 105,
    height: 70,
    borderRadius: 8,
  },
});
