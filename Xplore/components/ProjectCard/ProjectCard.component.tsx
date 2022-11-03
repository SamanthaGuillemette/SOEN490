import { Text } from "../Text";
import { View } from "../View";
import { Icon } from "../Icon";
import styles from "./ProjectCard.styles";
import { useThemeColor } from "../../hooks";
interface ProjectCardProps {
  projectName: String;
  description: String;
  members: String[];
  taskCount: Number;
  conversationCount: Number;
  percentComplete: Number;
}

export const ProjectCard = ({
  projectName,
  description,
  taskCount,
  conversationCount,
}: ProjectCardProps) => {
  const bg = useThemeColor("backgroundSecondary");
  return (
    <View style={[styles.cardContainer, { backgroundColor: bg }]}>
      <View
        style={[styles.projectInformationContainer, { backgroundColor: bg }]}
      >
        <Text variant="h3">{projectName}</Text>
        <Text variant="body">
          {/* limits the description to 8 words to avoid bloating of project card */}
          {description.split(" ").slice(0, 8).join(" ")}...
        </Text>
        <View style={[styles.taskContainer, { backgroundColor: bg }]}>
          <Icon
            name="file-text"
            size="small"
            color="primary"
            style={styles.icon}
          />
          <Text variant="smBody">{String(taskCount)} tasks</Text>
        </View>
        <View style={styles.conversationsContainer}>
          <Icon
            name="message-circle"
            size="small"
            color="primary"
            style={styles.icon}
          />
          <Text variant="smBody">
            {String(conversationCount)} conversations
          </Text>
        </View>
        <View>
          <Text>member avatar placeholder</Text>
        </View>
      </View>
      <View style={styles.projectCompletionContainer}>
        <Text variant="body">placeholder for project percentage component</Text>
      </View>
    </View>
  );
};
