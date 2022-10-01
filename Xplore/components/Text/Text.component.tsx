import { Text as RNText } from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor";
import styles from "./Text.styles";

interface TextProps {
  children: React.ReactNode;
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "body"
    | "smBody"
    | "label"
    | "smLabel"
    | "link";
}

export const Text = ({ children, variant = "body" }: TextProps) => {
  const textColor = useThemeColor("text");
  const dymamicTextStyle = styles[variant];

  return (
    <RNText style={[dymamicTextStyle, { color: textColor }]}>{children}</RNText>
  );
};
