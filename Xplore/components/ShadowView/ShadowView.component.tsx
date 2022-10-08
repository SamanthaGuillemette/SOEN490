import { StyleProp, View as RNView, ViewStyle } from "react-native";
import { colors } from "../../constants";
import { useThemeColor } from "../../hooks";
import styles from "./ShadowView.styles";

interface ShadowViewProps {
  children: React.ReactNode;
  backgroundColor?: keyof typeof colors.light & keyof typeof colors.dark;
  lightColor?: string;
  darkColor?: string;
  style?: StyleProp<ViewStyle>;
}

export const ShadowView = (props: ShadowViewProps) => {
  const {
    children,
    backgroundColor = "background",
    lightColor,
    darkColor,
    style,
  } = props;

  const bgColor = useThemeColor(backgroundColor, {
    light: lightColor,
    dark: darkColor,
  });

  const customShadowColor = useThemeColor("primary");

  return (
    <RNView
      style={[
        style,
        styles.shadow,
        { backgroundColor: bgColor, shadowColor: customShadowColor },
      ]}
    >
      {children}
    </RNView>
  );
};