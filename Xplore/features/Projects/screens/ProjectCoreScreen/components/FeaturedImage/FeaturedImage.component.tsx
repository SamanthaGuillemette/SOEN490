import { ImageBackground, View as RNView } from "react-native";
import { ShadowView, Text, View } from "../../../../../../components";
import styles from "./FeaturedImage.styles";
import { useColorScheme } from "../../../../../../hooks";

interface ShadowImageProps {
  projectName: string;
  source?: string | null;
}

export const FeaturedImage = (props: ShadowImageProps) => {
  const { projectName, source } = props;
  const colorScheme = useColorScheme();

  const imageSource =
    source || require("../../../../../../assets/logo_dark.png");

  return (
    <ShadowView backgroundColor="primary" style={styles.container}>
      {colorScheme === "dark"
        ? source && (
            <ImageBackground
              source={{
                uri: source,
              }}
              imageStyle={styles.imageBgContainer}
            >
              <View style={styles.thirdContainer}>
                <RNView style={styles.overlay} />
                <Text
                  variant="h3"
                  style={[styles.whiteText, styles.projectName]}
                >
                  {projectName}
                </Text>
              </View>
            </ImageBackground>
          )
        : source && (
            <ImageBackground
              source={{
                uri: source,
              }}
              imageStyle={styles.imageBgContainer}
            >
              <View style={styles.thirdContainer}>
                <RNView style={styles.overlay} />
                <Text
                  variant="h3"
                  style={[styles.whiteText, styles.projectName]}
                >
                  {projectName}
                </Text>
              </View>
            </ImageBackground>
          )}
      {!source && (
        <ImageBackground
          imageStyle={styles.imageBgContainer}
          source={imageSource}
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
