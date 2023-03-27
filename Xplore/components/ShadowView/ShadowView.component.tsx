import {
  StyleProp,
  View as RNView,
  ViewStyle,
  ViewProps as RNViewProps,
} from "react-native";
import { colors } from "../../constants";
import { useThemeColor } from "../../hooks";
import styles from "./ShadowView.styles";
import InsetShadow from "react-native-inset-shadow";

interface ShadowViewProps extends RNViewProps {
  children: React.ReactNode;
  shadowOffset?: number;
  backgroundColor?: keyof typeof colors.light & keyof typeof colors.dark;
  lightColor?: string;
  darkColor?: string;
  style?: StyleProp<ViewStyle>;
  isInnerShadow?: boolean;
}

export const ShadowView = (props: ShadowViewProps) => {
  const {
    children,
    shadowOffset = 0,
    backgroundColor = "backgroundSecondary",
    lightColor,
    darkColor,
    style,
    isInnerShadow = false,
    ...restOfProps
  } = props;

  const bgColor = useThemeColor(backgroundColor, {
    light: lightColor,
    dark: darkColor,
  });

  const customShadowColor = useThemeColor("primary");

  return !isInnerShadow ? (
    <RNView
      style={[
        style,
        styles.shadow,
        {
          backgroundColor: bgColor,
          shadowColor: customShadowColor,
          shadowOffset: { height: shadowOffset, width: 0 },
        },
      ]}
      {...restOfProps}
    >
      {children}
    </RNView>
  ) : (
    <InsetShadow
      shadowColor={customShadowColor}
      containerStyle={{ style, backgroundColor: bgColor }}
      shadowOffset={shadowOffset}
    >
      <RNView>{children}</RNView>
    </InsetShadow>
  );
};
