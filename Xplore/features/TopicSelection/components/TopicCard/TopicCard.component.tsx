import { useState } from "react";
import { ImageBackground, TouchableOpacity, Image, View as RNView } from "react-native";
import { ShadowView, Text, View } from "../../../../components";
import { useThemeColor } from "../../../../hooks";
import styles from "./TopicCard.styles";

interface TopicCardProps {
  topicName: string;
  imageURL: string;
}

const TopicCard = (props: TopicCardProps) => {
  const success = useThemeColor("success");
  const { topicName, imageURL } = props;
  const [showImage, setShowImage] = useState(true);

  const handleShowImage= () => {
    setShowImage(!showImage)
  }

  return (
    <TouchableOpacity onPress={() => handleShowImage()}>
      <ShadowView backgroundColor="primary" style={styles.container}>
          <ImageBackground
              source={{ uri: `${imageURL}` }}
              imageStyle={[styles.imageBgContainer, showImage ? {borderColor: success, borderWidth: 3} : null]}
          >
              <View style={styles.topicNameContainer}>
                <RNView style={showImage ? styles.overlay : null} />
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

export default TopicCard;
