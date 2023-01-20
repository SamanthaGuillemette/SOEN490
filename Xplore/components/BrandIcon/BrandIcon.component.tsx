import { FontAwesome5 } from "@expo/vector-icons";
import { Platform, StyleProp, ViewStyle } from "react-native";
import { colors, multiplier } from "../../constants";
import { useThemeColor } from "../../hooks";

interface BrandIconProps {
  name: keyof typeof FontAwesome5.glyphMap;
  size?: "small" | "medium" | "large";
  color?: keyof typeof colors.light & keyof typeof colors.dark;
  customColor?: string;
  style?: StyleProp<ViewStyle>;
}

export const BrandIcon = (props: BrandIconProps) => {
  const { name, size = "large", color = "primary", customColor, style } = props;

  let brandIconColor = useThemeColor(color);
  // If customColor is provided, use that instead
  if (customColor) {
    brandIconColor = customColor;
  }
  let iconSize: number;
  switch (size) {
    case "small":
      iconSize = Platform.OS === "ios" ? 18 * multiplier : 18;
      break;
    case "medium":
      iconSize = Platform.OS === "ios" ? 24 * multiplier : 24;
      break;
    case "large":
      iconSize = Platform.OS === "ios" ? 32 * multiplier : 32;
      break;
  }
  return (
    <FontAwesome5
      name={name}
      size={iconSize}
      color={brandIconColor}
      style={style}
    />
  );
};
export default BrandIcon;
