import { Image } from "react-native";
import { Icon, Text, View } from "../../../../components";
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
    <View
      backgroundColor="backgroundSecondary"
      style={styles.cardContainer}
      key={item.title}
    >
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={styles.projectImage}
      />

      <View style={styles.projectInfo}>
        <Text variant="h3" color="titleText">
          {item.title}
        </Text>
        <Text
          variant="body"
          color="bodyText"
          lineBreakMode="tail"
          numberOfLines={2}
          style={styles.projectDescription}
        >
          {item.description}
        </Text>

        <View style={styles.statIcon}>
          <Icon name="file-text" size="medium" />
          <Text variant="smBody" color="bodyText">
            12
          </Text>
        </View>
      </View>
    </View>
  );
};
