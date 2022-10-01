import { Text as RNText } from "react-native";

interface TextProps {
  children: React.ReactNode;
}

// Custom Text component
export const Text = ({ children }: TextProps) => {
  return (
    <RNText style={{ fontSize: 36, fontFamily: "poppins-bold" }}>
      {children}
    </RNText>
  );
};
