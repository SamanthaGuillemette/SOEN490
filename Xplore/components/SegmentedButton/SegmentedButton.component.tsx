import { useState } from "react";
import { View } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { useThemeColor } from "../../hooks";
import styles from "./SegmentedButton.styles";

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
        tabsContainerStyle={[
          styles.tabsContainerStyle,
          { backgroundColor: bg, shadowColor: primary },
        ]}
        tabStyle={[styles.tabStyle, { backgroundColor: bg, borderColor: bg }]}
        activeTabStyle={[styles.activeTabStyle, { backgroundColor: primary }]}
        tabTextStyle={{ color: primary }}
        activeTabTextStyle={[styles.activeTabStyle, { borderColor: bg }]}
      />
    </View>
  );
};
