import { Text, View } from "../../../../components";
import { StatBoxLarge } from "../StatBoxLarge";
import { StatBoxSmall } from "../StatBoxSmall";
import styles from "./TodayStats.styles";

export const TodayStats = () => {
  return (
    <View style={styles.container}>
      <Text variant="h2" color="titleText" style={styles.todayTitle}>
        Today
      </Text>
      <View style={styles.todayStats}>
        <View style={styles.leftPanel}>
          <StatBoxLarge
            title="In Progress"
            subTitle="3 Projects"
            iconName="refresh-ccw"
          />
          <StatBoxSmall
            title="Completed"
            subTitle="20 Tasks"
            iconName="check-circle"
          />
        </View>
        <View style={styles.rightPanel}>
          <StatBoxSmall title="Active" subTitle="15 Tasks" iconName="zap" />
          <StatBoxLarge title="Overdue" subTitle="6 Tasks" iconName="clock" />
        </View>
      </View>
    </View>
  );
};

export default TodayStats;
