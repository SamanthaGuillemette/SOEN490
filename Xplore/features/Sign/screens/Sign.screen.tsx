import * as React from "react";
import { View, ColorSchemeName } from "react-native";
import { Text } from "../../../components/Text";

interface SignProps {
  colorScheme: ColorSchemeName;
}

const Sign = ({ colorScheme }: SignProps) => {
  return (
    <View>
      <Text variant="h1">Sign In - Sign Up</Text>
    </View>
  );
};

export default Sign;
