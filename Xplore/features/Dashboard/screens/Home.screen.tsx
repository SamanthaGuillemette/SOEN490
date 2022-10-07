import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "../../Onboarding/screens/Onboarding.screen";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <NavigationContainer independent={true}>
      <Onboarding />
    </NavigationContainer>
  );
};

export default Home;
