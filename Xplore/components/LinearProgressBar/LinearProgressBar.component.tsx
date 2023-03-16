import { StyleProp, ViewStyle } from "react-native";
import { ProgressBar } from "react-native-paper";
import { colors } from "../../constants";
import { useThemeColor } from "../../hooks";
import { View } from "../View";
import styles from "./LinearProgressBar.styles";

interface LinearProgressBarProps {
  color?: keyof typeof colors.light & keyof typeof colors.dark;
  progress: number; // Range 0 - 100  ==> Example: 30, 50, 80, etc.
  style?: StyleProp<ViewStyle>;
}

export const LinearProgressBar = (props: LinearProgressBarProps) => {
  const { color = "primary", progress, style } = props;
  const customProgressColor = useThemeColor(color);
  const background = useThemeColor("background");

  return (
    <View>
      <ProgressBar
        progress={progress / 100}
        color={customProgressColor}
        style={[
          style,
          styles.progressBarMain,
          { backgroundColor: background, borderColor: background },
        ]}
      />
    </View>
  );
};
