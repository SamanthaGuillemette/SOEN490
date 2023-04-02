import { Image, TouchableOpacity } from "react-native";
import { View } from "../View";
import { ShadowView } from "../ShadowView";
import styles from "./ProjectCard.style";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { LinearProgressBar } from "../LinearProgressBar";
import { NavigationProp } from "@react-navigation/native";
import { useColorScheme } from "../../hooks";

interface ProjectCardProps {
  navigation: NavigationProp<any>;
  item: {
    name: string;
    description: string;
    imageURL?: string;
    tasks?: string[];
    conversation?: number;
    members?: string[];
    percentComplete: number;
  };
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { item } = props;
  const colorScheme = useColorScheme();

  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate("ProjectDetails", { item: item })
      }
    >
      <ShadowView
        backgroundColor="backgroundSecondary"
        style={styles.cardContainer}
        key={item.name}
      >
        {item.imageURL ? (
          <Image source={{ uri: item.imageURL }} style={styles.projectImage} />
        ) : (
          <Image
            source={
              colorScheme === "dark"
                ? require("../../assets/logo_dark.png")
                : require("../../assets/logo_light.png")
            }
            style={styles.projectImage}
          />
        )}
        <View style={styles.projectInfo}>
          <Text
            variant="h3"
            color="titleText"
            lineBreakMode="tail"
            numberOfLines={1}
          >
            {item.name}
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
                {item.tasks?.length}
              </Text>
            </View>

            <View style={styles.statIcon}>
              <Icon name="users" size="medium" style={styles.icon} />
              <Text variant="smBody" color="bodyText">
                {item.members?.length}
              </Text>
            </View>
          </View>

          <LinearProgressBar progress={item.percentComplete} color="success" />
        </View>
      </ShadowView>
    </TouchableOpacity>
  );
};
