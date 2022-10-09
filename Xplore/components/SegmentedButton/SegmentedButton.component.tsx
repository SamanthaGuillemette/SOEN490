import { useState } from "react";
import { StyleSheet, View } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { useThemeColor } from "../../hooks";

interface SegmentedButtonProps {
  labels: String[];
  setIndex: any;
}

export const SegmentedButton = ({ labels, setIndex }: SegmentedButtonProps) => {
  const primary = useThemeColor("primary");

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
          backgroundColor: primary,
          borderRadius: 30,
        }}
        tabStyle={{
          backgroundColor: primary,
          borderColor: primary,
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
          borderColor: primary,
          color: primary,
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
