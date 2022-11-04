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
  const whiteBackground = useThemeColor("backgroundSecondary");

  return (
    <View
      style={[
        styles.BiggerRectangle,
        { backgroundColor: barColor, width: width },
      ]}
    >
      <View
        style={[
          styles.Rectangle,
          {
            width: completionPercentage * width,
            backgroundColor: whiteBackground,
          },
        ]}
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
    borderRadius: 100,
  },
});
