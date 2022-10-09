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
  const bg = useThemeColor("backgroundSecondary");

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
          backgroundColor: bg,
          shadowColor: primary,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 4,
          borderRadius: 30,
        }}
        tabStyle={{
          backgroundColor: bg,
          borderColor: bg,
          margin: 1,
          padding: 1,
        }}
        activeTabStyle={{
          backgroundColor: primary,
          borderRadius: 30,
        }}
        tabTextStyle={{
          color: primary,
        }}
        activeTabTextStyle={{
          borderColor: bg,
          color: "white",
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
