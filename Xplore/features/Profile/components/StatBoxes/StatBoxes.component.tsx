import { View } from "react-native";
import { Text } from "../../../../components";
import { useThemeColor } from "../../../../hooks";
import styles from "./StatBoxes.styles";

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
