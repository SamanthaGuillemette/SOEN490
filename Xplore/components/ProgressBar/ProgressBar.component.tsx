import { colors } from "../../constants";
import { View } from "../View";
import { StyleSheet } from "react-native";
import { useThemeColor } from "../../hooks";
//import styles from "./ProgressBar.styles";

interface ProgressBarProps {
  completionPercentage: number;
  barColor: keyof typeof colors.light & keyof typeof colors.dark;
  width: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const { completionPercentage, barColor, width } = props;
  const greyBackground = useThemeColor("background");

  return (
    <View
      style={[
        styles.BiggerRectangle,
        { backgroundColor: greyBackground, width: width },
      ]}
    >
      <View
        style={[
          styles.Rectangle,
          {
            width: completionPercentage * width,
            backgroundColor: barColor,
          },
        ]}
      ></View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  BiggerRectangle: {
    height: 8,
    borderRadius: 100,
  },
  Rectangle: {
    height: 4,
    borderRadius: 100,
    marginTop: 2,
  },
});
