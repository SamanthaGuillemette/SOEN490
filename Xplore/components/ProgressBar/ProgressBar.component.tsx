import { colors } from "../../constants";
import { View } from "../View";
import { StyleSheet } from "react-native";
//import styles from "./ProgressBar.styles";

interface ProgressBarProps {
  completionPercentage: number;
  barColor: keyof typeof colors.light & keyof typeof colors.dark;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const { completionPercentage, barColor } = props;

  return (
    <View style={[styles.BiggerRectangle, { backgroundColor: barColor }]}>
      <View style={[styles.Rectangle, { width: 0.98 * 330 }]} />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  BiggerRectangle: {
    width: 330,
    height: 5,
    borderRadius: 100,
  },
  Rectangle: {
    height: 3,
    backgroundColor: colors.light.backgroundSecondary,
    borderRadius: 100,
  },
});
