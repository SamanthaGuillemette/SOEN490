import { Image } from "react-native";
import { ShadowView, Text, View } from "../../../../components";
import styles from "./ProjectCardSmall.styles";

interface ProjectCardSmallProps {
  projectName: string;
  imageURL: string;
}

export const ProjectCardSmall = (props: ProjectCardSmallProps) => {
  const { projectName, imageURL } = props;

  return (
    <ShadowView style={styles.container}>
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

export default ProjectCardSmall;
