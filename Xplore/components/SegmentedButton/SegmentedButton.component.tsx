import { useState } from "react";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { useThemeColor } from "../../hooks";
import { ShadowView } from "../ShadowView";
import styles from "./SegmentedButton.styles";

interface SegmentedButtonProps {
  labels: String[];
  setIndex: React.Dispatch<React.SetStateAction<number>>;
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
    <ShadowView style={styles.container}>
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
    </ShadowView>
  );
};
