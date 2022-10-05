import { useState } from "react";
import { StyleSheet, View } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";

interface SegmentedButtonProps {
  labels: String[];
  setIndex: any;
}

export const SegmentedButton = ({ labels, setIndex }: SegmentedButtonProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleIndexSelect(index: number) {
    setSelectedIndex(index);
    setIndex(index);
  }

  return (
    <View style={styles.container}>
      <SegmentedControlTab
        values={labels}
        selectedIndex={selectedIndex}
        onTabPress={handleIndexSelect}
        borderRadius={30}
        tabsContainerStyle={{
          height: 30,
          minWidth: 180,
          backgroundColor: "#C4C4C4",
          borderRadius: 30,
        }}
        tabStyle={{
          backgroundColor: "#C4C4C4",
          borderColor: "#C4C4C4",
          margin: 1,
          padding: 1,
        }}
        activeTabStyle={{
          backgroundColor: "white",
          borderRadius: 30,
        }}
        tabTextStyle={{
          color: "white",
        }}
        activeTabTextStyle={{
          borderColor: "#463FB0",
          color: "#463FB0",
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
  },
});
