import * as React from "react";
import { View } from "react-native";
import { Text } from "../../../components/Text";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <View>
      <Text variant="h1">Hello Poppins</Text>
    </View>
  );
};

export default Home;
