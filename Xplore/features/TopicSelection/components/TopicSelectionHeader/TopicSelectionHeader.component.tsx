import * as React from "react";
import { View, Text } from "../../../../components/";
import styles from "./TopicSelectionHeader.styles";

const TopicSelectionHeader = () => {
    return (
        <View style={styles.topicSelectionHeader}>
            <Text variant="h2" color="titleText">
                What topics interest you?
            </Text>
        </View>
    );
  };
  
  export default TopicSelectionHeader;