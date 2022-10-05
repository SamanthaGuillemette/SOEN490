import { Feather } from "@expo/vector-icons";
import { StyleProp, ViewStyle } from "react-native";
import { colors } from "../../constants";
import { useThemeColor } from "../../hooks";

interface IconProps {
  name: keyof typeof Feather.glyphMap;
  size?: "small" | "medium" | "large";
  color: keyof typeof colors.light & keyof typeof colors.dark;
  style?: StyleProp<ViewStyle>;
}

export const Icon = ({ name, size = "large", color, style }: IconProps) => {
  const iconColor = useThemeColor(color);

  let iconSize: number = 24;
  switch (size) {
    case "small":
      iconSize = 15;
      break;
    case "medium":
      iconSize = 18;
      break;
    case "large":
      iconSize = 24;
      break;
  }

  return (
    <Feather name={name} size={iconSize} color={iconColor} style={style} />
  );
};
