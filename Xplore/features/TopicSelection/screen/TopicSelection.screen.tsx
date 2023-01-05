import * as React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { SearchBar } from "../../../components";
import {
  TopicSelectionHeader,
  SelectTopics
} from "../components";


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