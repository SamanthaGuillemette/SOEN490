import { Text, View } from "../../../components";
import StatBoxLarge from "./StatBoxLarge.component";
import StatBoxSmall from "./StatBoxSmall.component";
import styles from "./TodayStats.styles";

const TodayStats = () => {
  return (
    <View backgroundColor="background">
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
