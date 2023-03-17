import {
  View,
  Text,
  Icon,
  CircularPercentageBar,
} from "../../../../components";
import { useThemeColor } from "../../../../hooks";
import styles from "./ProjectStatusBox.styles";

interface ProjectStats {
  tasks: string;
  conversations: String;
  date: String;
  percent: number;
}

const ProjectStats = ({
  tasks,
  conversations,
  date,
  percent,
}: ProjectStats) => {
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  return (
    <View
      style={[
        styles.statusBox_container,
        { backgroundColor: backgroundSecondary },
      ]}
    >
      <View style={{ backgroundColor: backgroundSecondary }}>
        <Text style={styles.statusBox_text}>
          <Icon size="small" name="file-text" />
          {"   " + tasks} tasks
        </Text>
        <Text style={styles.statusBox_text}>
          <Icon size="small" name="message-circle" />
          {"   " + conversations} Conversations
        </Text>
        <Text style={styles.statusBox_text}>
          <Icon size="small" name="calendar" />
          {"   " + date}
        </Text>
      </View>
      <CircularPercentageBar percentage={percent} />
    </View>
  );
};

export default ProjectStats;