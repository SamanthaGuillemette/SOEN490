import { ImageBackground } from "react-native";
import { ShadowView, Text, View } from "../../../../components";
import styles from "./TopicCard.styles";

interface TopicCardProps {
  topicName: string;
  imageURL: string;
}

const TopicCard = (props: TopicCardProps) => {
  const { topicName, imageURL } = props;

  return (
    <ShadowView backgroundColor="primary" style={styles.container}>
      <ImageBackground
        source={{ uri: `${imageURL}` }}
        imageStyle={styles.imageBgContainer}
      >
        <View style={styles.topicNameContainer}>
          <Text variant="h3" style={[styles.whiteText, styles.projectName]}>
            {topicName}
          </Text>
        </View>
      </ImageBackground>
    </ShadowView>
  );
};

export default TopicCard;
