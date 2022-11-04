import { Feather } from "@expo/vector-icons";
import { Platform, StyleProp, ViewStyle } from "react-native";
import { colors, multiplier } from "../../constants";
import { useThemeColor } from "../../hooks";

interface IconProps {
  name: keyof typeof Feather.glyphMap;
  size?: "small" | "medium" | "large";
  color: keyof typeof colors.light & keyof typeof colors.dark;
  style?: StyleProp<ViewStyle>;
}

const Icon = ({ name, size = "large", color, style }: IconProps) => {
  const iconColor = useThemeColor(color);

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
  }

  return (
    <Feather name={name} size={iconSize} color={iconColor} style={style} />
  );
};

export default Icon;
