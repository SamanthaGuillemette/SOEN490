import { Image } from "react-native";
import { ShadowView, Text, View } from "../../../../components";
import styles from "./ProjectCardSmall.styles";

interface ProjectCardSmallProps {
  projectName: string;
  imageURL: string;
  index: number;
}

export const ProjectCardSmall = (props: ProjectCardSmallProps) => {
  const { projectName, imageURL, index } = props;
  const dynamicMargin = index === 0 ? 20 : 0;

  return (
    <ShadowView
      backgroundColor="backgroundSecondary"
      style={[styles.container, { marginLeft: dynamicMargin }]}
    >
      <View style={styles.projectImageContainer}>
        <Image
          source={{
            uri: `${imageURL}`,
          }}
          style={styles.projectImage}
        />
      </View>
      <Text
        numberOfLines={1}
        variant="body"
        color="titleText"
        style={styles.projectTitle}
      >
        {projectName}
      </Text>
    </ShadowView>
  );
};
