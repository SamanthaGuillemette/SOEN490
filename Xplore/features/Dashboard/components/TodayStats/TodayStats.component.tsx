import { Text, View } from "../../../../components";
import { StatBoxLarge } from "../StatBoxLarge";
import { StatBoxSmall } from "../StatBoxSmall";
import styles from "./TodayStats.styles";

export const TodayStats = () => {
  return (
    <View backgroundColor="background" style={styles.container}>
      <Text variant="h2" style={styles.todayTitle}>
        Today
      </Text>
      <View backgroundColor="background" style={styles.todayStats}>
        <View backgroundColor="background">
          <StatBoxLarge />
          <StatBoxSmall />
        </View>
        <View backgroundColor="background">
          <StatBoxSmall />
          <StatBoxLarge />
        </View>
      </View>
    </View>
  );
};

export default TodayStats;
