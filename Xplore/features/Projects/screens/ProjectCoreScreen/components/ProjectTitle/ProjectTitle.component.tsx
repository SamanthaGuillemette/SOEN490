import { ImageBackground } from "react-native";
import { Text, View } from "../../../../../../components";
import styles from "./ProjectTitle.styles";

const ProjectTitle = () => {
  return (
    <View backgroundColor="background">
      <ImageBackground
        source={require("../../../assets/SnakeRobot.png")}
        style={styles.projectImage}
        imageStyle={{ opacity: 0.4 }}
      >
        <Text variant="h2" style={styles.imageText}>
          Snake Robot
        </Text>
      </ImageBackground>
    </View>
  );
};

export default ProjectTitle;
