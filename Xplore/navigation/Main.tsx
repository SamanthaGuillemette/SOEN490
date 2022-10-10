import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ColorSchemeName } from "react-native";
import Home from "../features/Dashboard/screens/Home.screen";
import Profile from "../features/Profile/screens/Profile.screen";
import Completion from "../features/Completion/screens/Completion.component";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

interface MainProps {
  colorScheme: ColorSchemeName;
}

const Main = ({ colorScheme }: MainProps) => {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator initialRouteName="Profile">
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Completion" component={Completion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
