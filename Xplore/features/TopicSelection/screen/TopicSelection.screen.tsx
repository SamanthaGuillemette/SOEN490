import * as React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import SearchBar from "../../../components/SearchBar/SearchBar.component";
import TopicSelectionHeader from "../components/TopicSelectionHeader/TopicSelectionHeader.component";
import TopicCard from "../components/TopicCard/TopicCard.component";


const TopicSelection = () => {
  return (
    <SafeAreaView>
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <TopicSelectionHeader/>
            <SearchBar></SearchBar>
            <TopicCard topicName="Frontend Development" imageURL="https://picsum.photos/200"></TopicCard>
        </ScrollView>
    </SafeAreaView>
  );
};

export default TopicSelection;