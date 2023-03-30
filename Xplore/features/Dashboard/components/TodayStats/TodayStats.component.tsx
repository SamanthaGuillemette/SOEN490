import { useQuery } from "react-query";
import { Text, View } from "../../../../components";
import {
  useCompletedTasks,
  useProjectCardInfo,
} from "../../../../services/api/projects";
import { StatBoxLarge } from "../StatBoxLarge";
import { StatBoxSmall } from "../StatBoxSmall";
import styles from "./TodayStats.styles";
import api from "../../../../services/appwrite/api";

export const TodayStats = () => {
  var allProjectInfo: any;

  // Quering current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;

  allProjectInfo = useProjectCardInfo(userId);

  const tasksCompleted =
    useCompletedTasks(allProjectInfo[1])[0] +
    useCompletedTasks(allProjectInfo[0])[0];
  const tasksActive =
    useCompletedTasks(allProjectInfo[1])[1] +
    useCompletedTasks(allProjectInfo[0])[1];
  const tasksOverdue =
    useCompletedTasks(allProjectInfo[1])[2] +
    useCompletedTasks(allProjectInfo[0])[2];

  return (
    <View style={styles.container}>
      <Text variant="h2" color="titleText" style={styles.todayTitle}>
        Today
      </Text>
      <View style={styles.todayStats}>
        <View style={styles.leftPanel}>
          <StatBoxLarge
            title="In Progress"
            subTitle={allProjectInfo[0]?.length + " Projects"}
            iconName="refresh-ccw"
          />
          <StatBoxSmall
            title="Completed"
            subTitle={tasksCompleted + " Tasks"}
            iconName="check-circle"
          />
        </View>
        <View style={styles.rightPanel}>
          <StatBoxSmall
            title="Active"
            subTitle={tasksActive + " Tasks"}
            iconName="zap"
          />
          <StatBoxLarge
            title="Overdue"
            subTitle={tasksOverdue + " Tasks"}
            iconName="clock"
          />
        </View>
      </View>
    </View>
  );
};

export default TodayStats;
