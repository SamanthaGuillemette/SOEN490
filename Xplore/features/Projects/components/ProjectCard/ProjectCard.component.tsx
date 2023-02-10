//es-l
import {
  Text,
  View,
  Icon,
  AvatarGroup,
  ShadowView,
  CircularPercentageBar,
} from "../../../../components";
import styles from "./ProjectCard.styles";
import { useThemeColor } from "../../../../hooks";

interface ProjectCardProps {
  projectName: String;
  description: String;
  memberAvatars: string[];
  taskCount: Number;
  conversationCount: Number;
  percentComplete: Number;
}

export const ProjectCard = ({
  projectName,
  description,
  taskCount,
  conversationCount,
  memberAvatars,
  percentComplete,
}: ProjectCardProps) => {
  const bg = useThemeColor("backgroundSecondary");
  const primary = useThemeColor("primary");
  return (
    <ShadowView
      style={[
        styles.cardContainer,
        { backgroundColor: bg, shadowColor: primary },
      ]}
    >
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
        <View style={styles.projectMembersContainer}>
          <AvatarGroup usersAvatars={memberAvatars} scale={1.5} />
        </View>
      </View>
      <View style={styles.projectCompletionContainer}>
        <CircularPercentageBar
          percentage={percentComplete}
          base_degrees={70}
          styles={styles.percentageCircle}
          scale={1.6}
        />
      </View>
    </ShadowView>
  );
};
