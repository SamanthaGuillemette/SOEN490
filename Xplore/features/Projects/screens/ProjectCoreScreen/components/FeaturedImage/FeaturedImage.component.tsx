import { ImageBackground, View as RNView } from "react-native";
import { ShadowView, Text, View } from "../../../../../../components";
import styles from "./FeaturedImage.styles";
import { useColorScheme } from "../../../../../../hooks";

interface ShadowImageProps {
  projectName: string;
  source: string;
}

export const FeaturedImage = (props: ShadowImageProps) => {
  const { projectName, source } = props;
  const colorScheme = useColorScheme();

  return (
    <ShadowView backgroundColor="primary" style={styles.container}>
      {colorScheme === "dark" ? (
        source !== "" || source !== null ? (
          <ImageBackground
            source={{
              uri: source,
            }}
            imageStyle={styles.imageBgContainer}
          >
            <View style={styles.thirdContainer}>
              <RNView style={styles.overlay} />
              <Text variant="h3" style={[styles.whiteText, styles.projectName]}>
                {projectName}
              </Text>
            </View>
          </ImageBackground>
        ) : (
          <ImageBackground
            imageStyle={styles.imageBgContainer}
            source={require("../../../../../../assets/logo_dark.png")}
          >
            <View style={styles.thirdContainer}>
              <RNView style={styles.overlay} />
              <Text variant="h3" style={[styles.whiteText, styles.projectName]}>
                {projectName}
              </Text>
            </View>
          </ImageBackground>
        )
      ) : source !== "" || source !== null ? (
        <ImageBackground
          source={{
            uri: source,
          }}
          imageStyle={styles.imageBgContainer}
        >
          <View style={styles.thirdContainer}>
            <RNView style={styles.overlay} />
            <Text variant="h3" style={[styles.whiteText, styles.projectName]}>
              {projectName}
            </Text>
          </View>
        </ImageBackground>
      ) : (
        <ImageBackground
          imageStyle={styles.imageBgContainer}
          source={require("../../../../../../assets/logo_light.png")}
        >
          <View style={styles.thirdContainer}>
            <RNView style={styles.overlay} />
            <Text variant="h3" style={[styles.whiteText, styles.projectName]}>
              {projectName}
            </Text>
          </View>
        </ImageBackground>
      )}
    </ShadowView>
  );
};

export default FeaturedImage;
