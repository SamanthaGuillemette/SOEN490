import {
  StyleProp,
  View as RNView,
  ViewStyle,
  ViewProps as RNViewProps,
} from "react-native";
import { colors } from "../../constants";
import { useThemeColor } from "../../hooks";

interface ViewProps extends RNViewProps {
  children: React.ReactNode;
  backgroundColor?: keyof typeof colors.light & keyof typeof colors.dark;
  lightColor?: string;
  darkColor?: string;
  style?: StyleProp<ViewStyle>;
}

export const View = (props: ViewProps) => {
  const {
    children,
    backgroundColor = "transparent",
    lightColor,
    darkColor,
    style,
    ...restOfProps
  } = props;

  const bgColor = useThemeColor(backgroundColor, {
    light: lightColor,
    dark: darkColor,
  });

  return (
    <RNView style={[style, { backgroundColor: bgColor }]} {...restOfProps}>
      {children}
    </RNView>
  );
};
