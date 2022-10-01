import * as React from "react";
import { View } from "react-native";
import { Text } from "../../../components/Text";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <View>
      <Text style={{ color: "white" }}>Hello Poppins</Text>
    </View>
  );
};

export default Home;
