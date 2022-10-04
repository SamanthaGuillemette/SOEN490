import { useState } from "react";
import { StyleSheet, View } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";

interface SegmentedButtonProps {}

export const SegmentedButton = ({}: SegmentedButtonProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleSingleIndexSelect(index: number) {
    if (selectedIndex == 0) {
      setSelectedIndex(1);
    } else {
      setSelectedIndex(0);
    }
  }
  return (
    <View style={styles.container}>
      <SegmentedControlTab
        values={["SIGN IN", "SIGN UP"]}
        selectedIndex={selectedIndex}
        onTabPress={handleSingleIndexSelect}
        borderRadius={15}
        tabsContainerStyle={{
          height: 30,
          minWidth: 170,
          backgroundColor: "#C4C4C4",
          borderColor: "#463FB0",
          borderRadius: 20,
        }}
        tabStyle={{
          backgroundColor: "#C4C4C4",
          borderColor: "#463FB0",
        }}
        activeTabStyle={{
          backgroundColor: "white",
          borderColor: "#463FB0",
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
