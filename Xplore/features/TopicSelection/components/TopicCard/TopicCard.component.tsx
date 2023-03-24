import { useState } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  Image,
  View as RNView,
} from "react-native";
import { Text, View } from "../../../../components";
import { useThemeColor } from "../../../../hooks";
import styles from "./TopicCard.styles";
import { categories } from "../../../../constants";

interface TopicCardProps {
  topicName: string;
  imageURL: string;
  index: number;
}

export const TopicCard = (props: TopicCardProps) => {
  const success = useThemeColor("success");
  const { topicName, imageURL } = props;
  const [showImage, setShowImage] = useState(false);
  
  // The different categories
  const [frontendDev, setFrontendDev] = useState(false);
  const [backendDev, setBackendDev] = useState(false);
  const [webDev, setWebDev] = useState(false);
  const [mobileDev, setMobileDev] = useState(false);
  const [gameDev, setGameDev] = useState(false);
  const [embeddedSystems, setEmbeddedSystems] = useState(false);
  const [algorithms, setAlgorithms] = useState(false);
  const [softwareOptimization, setSoftwareOptimization] = useState(false);
  const [security, setSecurity] = useState(false);
  const [blockchain, setBlockchain] = useState(false);

  const handleShowImage = () => {
    setShowImage(!showImage);
  };

  const handleSetCategory = () => {
    if (topicName == categories.frontendDev) { setFrontendDev(!frontendDev) }
    else if (topicName == categories.backendDev) { setBackendDev(!backendDev) }
    else if (topicName == categories.webDev) { setWebDev(!webDev) }
    else if (topicName == categories.mobileDev) { setMobileDev(!mobileDev) }
    else if (topicName == categories.gameDev) { setGameDev(!gameDev) }
    else if (topicName == categories.embeddedSystems) { setEmbeddedSystems(!embeddedSystems) }
    else if (topicName == categories.algorithms) { setAlgorithms(!algorithms) }
    else if (topicName == categories.softwareOptimization) { setSoftwareOptimization(!softwareOptimization) }
    else if (topicName == categories.security) { setSecurity(!security) }
    else if (topicName == categories.blockchain) { setBlockchain(!blockchain) }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        handleShowImage()
        handleSetCategory()
      }}
    >
      <ImageBackground
        source={{ uri: `${imageURL}` }}
        imageStyle={styles.imageBgContainer}
      >
        <View style={styles.topicNameContainer}>
          <RNView
            style={
              showImage
                ? [
                    styles.selectedOverlay,
                    { borderColor: success, borderWidth: 3 },
                  ]
                : styles.overlay
            }
          />
          {showImage ? (
            <Image
              source={require("../../../../assets/check-circle.png")}
              style={styles.checkCircleImg}
            />
          ) : null}
          <Text
            variant="h3"
            color={showImage ? "smallText" : "white"}
            style={styles.projectName}
          >
            {topicName}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
