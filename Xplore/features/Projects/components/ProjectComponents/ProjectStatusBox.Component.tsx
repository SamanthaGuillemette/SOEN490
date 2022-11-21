import { ShadowView, View, Text, Icon } from "../../../../components";
import { useThemeColor } from "../../../../hooks";
import styles from "./ProjectStatusBox.styles";

interface ProjectStats {
  tasks: string;
  conversations: String;
  date?: String;
  onPress?: any;
}

const ProjectStats = ({ tasks, conversations, date }: ProjectStats) => {
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
          <Icon name="file-text" />
          {" " + tasks} tasks
        </Text>
        <Text style={styles.statusBox_text}>
          <Icon name="message-circle" />
          {" " + conversations} Conversations
        </Text>
        <Text style={styles.statusBox_text}>
          <Icon name="calendar" />
          {" " + date}
        </Text>
      </View>
    </ShadowView>
  );
};

export default ProjectStats;
