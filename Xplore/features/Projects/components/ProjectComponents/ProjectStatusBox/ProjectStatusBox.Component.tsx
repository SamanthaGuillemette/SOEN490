import { ShadowView, View, Text, Icon } from "../../../../../components";
import { useThemeColor } from "../../../../../hooks";
import styles from "./ProjectStatusBox.styles";
import CircularPercentageBar from "../CircularPercentageBar/CircularPercentageBar.component";

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
    <ShadowView
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
    </ShadowView>
  );
};

export default ProjectStats;
