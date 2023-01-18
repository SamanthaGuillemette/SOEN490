import {
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from "react-native";
import { useThemeColor } from "../../hooks";
import styles from "./Text.styles";

// Extends the React Native's TextProps to have their props autocomplete + our own props
interface TextProps extends RNTextProps {
  children: React.ReactNode;
  color?:
    | "titleText"
    | "bodyText"
    | "smallText"
    | "generalGray"
    | "linkText"
    | "white";
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
    ...otherProps // This is the rest of the props from the original <Text /> component
  } = props;

  const textColor = useThemeColor(color, {
    light: lightColor,
    dark: darkColor,
  });
  const dymamicTextStyle = styles[variant];

  return (
    <RNText
      {...otherProps}
      style={[dymamicTextStyle, { color: textColor }, style]}
    >
      {children}
    </RNText>
  );
};
