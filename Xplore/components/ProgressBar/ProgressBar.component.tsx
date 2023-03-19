import { colors } from "../../constants";
import { View } from "react-native";
import { useThemeColor } from "../../hooks";
import styles from "./ProgressBar.styles";

interface ProgressBarProps {
  completionPercentage: number;
  barColor: keyof typeof colors.light & keyof typeof colors.dark;
  width: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const { completionPercentage, barColor, width } = props;
  const greyBackground = useThemeColor("background");
  const rectangleColor = useThemeColor(barColor);

  return (
    <View
      style={[
        styles.BiggerRectangle,
        { backgroundColor: greyBackground, width: width },
      ]}
      testID={completionPercentage.toString() + width.toString()}
    >
      <View
        style={[
          styles.Rectangle,
          {
            width: completionPercentage * width,
            backgroundColor: rectangleColor,
          },
        ]}
      />
    </View>
  );
};

export default ProgressBar;
