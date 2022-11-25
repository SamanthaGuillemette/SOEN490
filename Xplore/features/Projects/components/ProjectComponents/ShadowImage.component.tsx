import { ImageBackground, View as RNView } from "react-native";
import { ShadowView, Text, View } from "../../../../components";
import styles from "./ShadowImage.styles";

interface ShadowImageProps {
  projectName: string;
  source: string;
}

export const ShadowImage = (props: ShadowImageProps) => {
  const { projectName, source } = props;

  return (
    <ShadowView backgroundColor="primary" style={styles.container}>
      <ImageBackground
        source={require("../../../../assets/SnakeRobot.png")}
        imageStyle={styles.imageBgContainer}
      >
        <View style={styles.thirdContainer}>
          <RNView style={styles.overlay} />
          <Text variant="h3" style={[styles.whiteText, styles.projectName]}>
            {projectName}
          </Text>
        </View>
      </ImageBackground>
    </ShadowView>
  );
};

export default ShadowImage;
