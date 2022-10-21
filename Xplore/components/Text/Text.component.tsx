import { StyleProp, Text as RNText, TextStyle } from "react-native";
import { useThemeColor } from "../../hooks";
import styles from "./Text.styles";

interface TextProps {
  children: React.ReactNode;
  color?: "titleText" | "bodyText" | "smallText" | "generalGray" | "linkText";
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "body"
    | "smBody"
    | "label"
    | "smLabel"
    | "link";
  lightColor?: string;
  darkColor?: string;
  style?: StyleProp<TextStyle>;
}

export const Text = (props: TextProps) => {
  // Destructure all the properties we need from "props". Give some default values.
  const {
    children,
    color = "bodyText",
    variant = "body",
    lightColor,
    darkColor,
    style,
  } = props;

  const textColor = useThemeColor(color, {
    light: lightColor,
    dark: darkColor,
  });
  const dymamicTextStyle = styles[variant];

  return (
    <RNText style={[dymamicTextStyle, { color: textColor }, style]}>
      {children}
    </RNText>
  );
};
