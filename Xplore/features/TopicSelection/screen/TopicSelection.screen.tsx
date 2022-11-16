import * as React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import TopicSelectionHeader from "../components/TopicSelectionHeader/TopicSelectionHeader.component";


const TopicSelection = () => {
  return (
    <SafeAreaView>
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <TopicSelectionHeader/>
        </ScrollView>
    </SafeAreaView>
  );
};

export default TopicSelection;