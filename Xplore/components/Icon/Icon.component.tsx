import { Feather } from "@expo/vector-icons";
import { Platform, StyleProp, ViewStyle } from "react-native";
import { colors, multiplier } from "../../constants";
import { useThemeColor } from "../../hooks";

interface IconProps {
  name: keyof typeof Feather.glyphMap;
  size?: "small" | "medium" | "large" | "x-large";
  color?: keyof typeof colors.light & keyof typeof colors.dark;
  customColor?: string;
  style?: StyleProp<ViewStyle>;
}

export const Icon = (props: IconProps) => {
  const { name, size = "large", color = "primary", customColor, style } = props;

  let iconColor = useThemeColor(color);
  // If customColor is provided, use that instead
  if (customColor) {
    iconColor = customColor;
  }

  let iconSize: number;
  switch (size) {
    case "small":
      iconSize = Platform.OS === "ios" ? 15 * multiplier : 15;
      break;
    case "medium":
      iconSize = Platform.OS === "ios" ? 18 * multiplier : 18;
      break;
    case "large":
      iconSize = Platform.OS === "ios" ? 24 * multiplier : 24;
      break;
    case "x-large":
      iconSize = Platform.OS === "ios" ? 60 * multiplier : 60;
      break;
  }

  return (
    <Feather
      name={name}
      size={iconSize}
      color={iconColor}
      style={style}
      testID={name}
    />
  );
};

export default Icon;
