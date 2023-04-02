import { View } from "react-native";
import { Text } from "../../../../components";
import { useThemeColor } from "../../../../hooks";
import styles from "./StatBoxes.styles";

interface StatBoxProps {
  numProjects: number;
  numBadges: number;
  xpLevel: number;
}

export const StatBoxes = (props: StatBoxProps) => {
  const { numProjects, numBadges, xpLevel } = props;
  const badgeBackground = useThemeColor("background");

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.badgeBox, { backgroundColor: badgeBackground }]}>
        <Text variant="h2" color="titleText">
          {xpLevel}
        </Text>
        <Text variant="smBody" color="bodyText">
          Level
        </Text>
      </View>
      <View style={[styles.badgeBox, { backgroundColor: badgeBackground }]}>
        <Text variant="h2" color="titleText">
          {numBadges}
        </Text>
        <Text variant="smBody" color="bodyText">
          Badges
        </Text>
      </View>
      <View style={[styles.badgeBox, { backgroundColor: badgeBackground }]}>
        <Text variant="h2" color="titleText">
          {numProjects}
        </Text>
        <Text variant="smBody" color="bodyText">
          Projects
        </Text>
      </View>
    </View>
  );
};
