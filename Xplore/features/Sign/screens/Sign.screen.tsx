import * as React from "react";
import { View } from "react-native";
import { Text } from "../../../components/Text";
import { SegmentedButton } from "../../../components/SegmentedButton";

interface SignProps {}

const Sign = ({}: SignProps) => {
  return (
    <View>
      <Text variant="h1">Sign In - Sign Up</Text>
      <SegmentedButton />
    </View>
  );
};

export default Sign;
