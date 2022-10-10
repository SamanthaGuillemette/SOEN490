import { StyleProp, View as RNView, ViewStyle } from "react-native";
import { colors } from "../../constants";
import { useThemeColor } from "../../hooks";

interface ViewProps {
  children: React.ReactNode;
  backgroundColor?: keyof typeof colors.light & keyof typeof colors.dark;
  lightColor?: string;
  darkColor?: string;
  style?: StyleProp<ViewStyle>;
}

export const View = (props: ViewProps) => {
  const {
    children,
    backgroundColor = "backgroundSecondary",
    lightColor,
    darkColor,
    style,
  } = props;

  const bgColor = useThemeColor(backgroundColor, {
    light: lightColor,
    dark: darkColor,
  });

  return (
    <RNView style={[style, { backgroundColor: bgColor }]}>{children}</RNView>
  );
};
