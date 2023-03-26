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
import api from "../../../../services/appwrite/api";
import { useQuery } from "react-query";
import { updateInterests } from "../../../../services/api/interests";

interface TopicCardProps {
  topicName: string;
  imageURL: string;
  index: number;
}

let interests = ["", "", "", "", "", "", "", "", "", ""];

export const TopicCard = (props: TopicCardProps) => {
  const success = useThemeColor("success");
  const { topicName, imageURL } = props;
  const [showImage, setShowImage] = useState(false);

  // Current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;
  
  const handleShowImage = () => {
    setShowImage(!showImage);
  };

  const handleSetCategory = () => {
    if (topicName === categories.frontendDev) {
      showImage ? (interests[0] = "") : (interests[0] = topicName);
    } else if (topicName === categories.backendDev) {
      showImage ? (interests[1] = "") : (interests[1] = topicName);
    } else if (topicName === categories.webDev) {
      showImage ? (interests[2] = "") : (interests[2] = topicName);
    } else if (topicName === categories.mobileDev) {
      showImage ? (interests[3] = "") : (interests[3] = topicName);
    } else if (topicName === categories.gameDev) {
      showImage ? (interests[4] = "") : (interests[4] = topicName);
    } else if (topicName === categories.embeddedSystems) {
      showImage ? (interests[5] = "") : (interests[5] = topicName);
    } else if (topicName === categories.algorithms) {
      showImage ? (interests[6] = "") : (interests[6] = topicName);
    } else if (topicName === categories.softwareOptimization) {
      showImage ? (interests[7] = "") : (interests[7] = topicName);
    } else if (topicName === categories.security) {
      showImage ? (interests[8] = "") : (interests[8] = topicName);
    } else if (topicName === categories.blockchain) {
      showImage ? (interests[9] = "") : (interests[9] = topicName);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        handleShowImage();
        handleSetCategory();
        updateInterests(userId, interests);
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
