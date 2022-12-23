import * as React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import SearchBar from "../../../components/SearchBar/SearchBar.component";
import SelectTopics from "../components/SelectTopics/SelectTopics.component";
import TopicSelectionHeader from "../components/TopicSelectionHeader/TopicSelectionHeader.component";


const TopicSelection = () => {
  return (
    <SafeAreaView>
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <TopicSelectionHeader/>
            <SearchBar/>
            <SelectTopics/>
        </ScrollView>
    </SafeAreaView>
  );
};

export default TopicSelection;