import * as React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import SearchBar from "../../../components/SearchBar/SearchBar.component"
import TopicSelectionHeader from "../components/TopicSelectionHeader/TopicSelectionHeader.component";


const TopicSelection = () => {
  return (
    <SafeAreaView>
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <TopicSelectionHeader/>
            <SearchBar></SearchBar>
        </ScrollView>
    </SafeAreaView>
  );
};

export default TopicSelection;