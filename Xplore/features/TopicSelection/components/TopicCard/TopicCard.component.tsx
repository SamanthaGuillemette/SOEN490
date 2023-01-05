import { useState } from "react";
import { ImageBackground, TouchableOpacity, Image, View as RNView } from "react-native";
import { ShadowView, Text, View } from "../../../../components";
import { useThemeColor } from "../../../../hooks";
import styles from "./TopicCard.styles";

interface TopicCardProps {
  topicName: string;
  imageURL: string;
  index: number;
}

export const TopicCard = (props: TopicCardProps) => {
  const success = useThemeColor("success");
  const { topicName, imageURL } = props;
  const [showImage, setShowImage] = useState(false);

  const handleShowImage= () => {
    setShowImage(!showImage)
  }

  return (
    <TouchableOpacity onPress={() => handleShowImage()}>
      <ShadowView 
        backgroundColor="primary" 
        isInnerShadow={false}
        style={styles.container}>
          <ImageBackground
              source={{ uri: `${imageURL}` }}
              imageStyle={styles.imageBgContainer}
          >
              <View style={styles.topicNameContainer}>
                <RNView style={showImage ? [styles.selectedOverlay, {borderColor: success, borderWidth: 3}] : styles.overlay} />
                {showImage ? (
                  <Image
                    source={require("../../../../assets/check-circle.png")}
                    style={styles.checkCircleImg}/> ) : null}
                  <Text variant="h3" color={showImage ? "smallText":  "generalGray"} style={styles.projectName}>
                    {topicName}
                  </Text>
              </View>
          </ImageBackground>
      </ShadowView>
    </TouchableOpacity>
  );
};
