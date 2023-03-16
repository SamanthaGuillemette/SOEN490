import { Image, TouchableOpacity } from "react-native";
import { View } from "../View";
import { ShadowView } from "../ShadowView";
import styles from "./ProjectCard.style";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { LinearProgressBar } from "../LinearProgressBar";

interface ProjectCardProps {
  item: {
    title: string;
    description: string;
    projectImage?: string;
    tasks?: number;
    conversation?: number;
    members?: number;
    percentComplete: number;
  };
}
export const ProjectCard = (props: ProjectCardProps) => {
  const { item } = props;

  return (
    <TouchableOpacity>
      <ShadowView
        backgroundColor="backgroundSecondary"
        style={styles.cardContainer}
        key={item.title}
      >
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={styles.projectImage}
        />

        <View style={styles.projectInfo}>
          <Text
            variant="h3"
            color="titleText"
            lineBreakMode="tail"
            numberOfLines={1}
          >
            {item.title}
          </Text>
          <Text
            variant="body"
            color="bodyText"
            lineBreakMode="tail"
            numberOfLines={1}
            style={styles.projectDescription}
          >
            {item.description}
          </Text>

          <View style={styles.statContainer}>
            <View style={styles.statIcon}>
              <Icon name="file-text" size="medium" style={styles.icon} />
              <Text variant="smBody" color="bodyText">
                {item.tasks}
              </Text>
            </View>

            <View style={styles.statIcon}>
              <Icon name="message-circle" size="medium" style={styles.icon} />
              <Text variant="smBody" color="bodyText">
                {item.conversation}
              </Text>
            </View>

            <View style={styles.statIcon}>
              <Icon name="users" size="medium" style={styles.icon} />
              <Text variant="smBody" color="bodyText">
                {item.members}
              </Text>
            </View>
          </View>

          <LinearProgressBar progress={item.percentComplete} color="success" />
        </View>
      </ShadowView>
    </TouchableOpacity>
  );
};
