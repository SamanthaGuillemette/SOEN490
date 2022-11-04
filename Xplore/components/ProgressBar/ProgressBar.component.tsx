import { colors } from "../../constants";
import { View } from "../View";
import { StyleSheet } from "react-native";
//import styles from "./ProgressBar.styles";

interface ProgressBarProps {
  completionPercentage: number;
  barColor: keyof typeof colors.light & keyof typeof colors.dark;
  width: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const { completionPercentage, barColor, width } = props;

  return (
    <View
      style={[
        styles.BiggerRectangle,
        { backgroundColor: barColor, width: width },
      ]}
    >
      <View
        style={[styles.Rectangle, { width: completionPercentage * width }]}
      ></View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  BiggerRectangle: {
    height: 5,
    borderRadius: 100,
  },
  Rectangle: {
    height: 3,
    backgroundColor: colors.light.backgroundSecondary,
    borderRadius: 100,
  },
});
