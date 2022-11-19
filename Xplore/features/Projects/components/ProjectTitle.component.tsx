import { StyleSheet, PixelRatio, ImageBackground } from "react-native";
import { Text, View } from "../../../components";

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

const styles = StyleSheet.create({
  projectImage: {
    marginTop: -50,
    marginLeft: -20,
    width: PixelRatio.getPixelSizeForLayoutSize(160),
    height: PixelRatio.getPixelSizeForLayoutSize(80),
  },
  imageText: {
    marginTop: 120,
    marginLeft: -20,
    textAlign: "center",
    textAlignVertical: "bottom",
    color: "white",
  },
});
