import * as React from "react";
import { SafeAreaView } from "react-native";
import { SelectTopics } from "../components";
import { NavigationProp } from "@react-navigation/native";

interface TopicSelectionProps {
  navigation: NavigationProp<any>;
}

const TopicSelection = (props: TopicSelectionProps) => {
  const { navigation } = props;
  return (
    <SafeAreaView>
      <SelectTopics navigation={navigation}/>
    </SafeAreaView>
  );
};

export default TopicSelection;
