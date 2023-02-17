import { Image } from "react-native";
import {
  Icon,
  LinearProgressBar,
  ShadowView,
  Text,
  View,
} from "../../../../components";
import styles from "./AllProjectsCard.styles";

interface AllProjectsCardProps {
  item: {
    title: string;
    description: string;
    projectImage: string;
    tasks: number;
    conversation: number;
    members: number;
    progress: number;
  };
}

export const AllProjectsCard = (props: AllProjectsCardProps) => {
  const { item } = props;

  return (
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

        <LinearProgressBar progress={item.progress} color="success" />
      </View>
    </ShadowView>
  );
};
