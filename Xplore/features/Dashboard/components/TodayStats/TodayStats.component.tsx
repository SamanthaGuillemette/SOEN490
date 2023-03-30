import { useQuery } from "react-query";
import { Text, View } from "../../../../components";
import { useProjectCardInfo } from "../../../../services/api/projects";
import { StatBoxLarge } from "../StatBoxLarge";
import { StatBoxSmall } from "../StatBoxSmall";
import styles from "./TodayStats.styles";
import api from "../../../../services/appwrite/api";

export const TodayStats = () => {
  var allProjectCard: any;

  // Quering current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;

  allProjectCard = useProjectCardInfo(userId);

  return (
    <View style={styles.container}>
      <Text variant="h2" color="titleText" style={styles.todayTitle}>
        Today
      </Text>
      <View style={styles.todayStats}>
        <View style={styles.leftPanel}>
          <StatBoxLarge
            title="In Progress"
            subTitle={allProjectCard[0]?.length + " Projects"}
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
