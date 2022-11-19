import { Text } from "../Text";
import { View } from "../View";
import { Icon } from "../Icon";
import styles from "./ProjectCard.styles";
import { useThemeColor } from "../../hooks";
import { AvatarProps } from "../Avatar/Avatar.component";
import { AvatarList } from "../AvatarList";
import { ShadowView } from "../ShadowView";
//import { View as RNView } from "react-native-ui-lib";

interface ProjectCardProps {
  projectName: String;
  description: String;
  members: AvatarProps[];
  taskCount: Number;
  conversationCount: Number;
  percentComplete: Number;
}

export const ProjectCard = ({
  projectName,
  description,
  taskCount,
  conversationCount,
  members,
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
          <AvatarList users={members} />
        </View>
      </View>
      <View style={styles.projectCompletionContainer}>
        <Text variant="body">placeholder for project percentage component</Text>
      </View>
    </ShadowView>
  );
};
