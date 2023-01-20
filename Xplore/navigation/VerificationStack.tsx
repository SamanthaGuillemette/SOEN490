import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sign from "../features/Sign/screens/Sign.screen";

const Stack = createNativeStackNavigator();

const VerificationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Sign"
    >
      {/* temporary until verification pages are created */}
      <Stack.Screen name="Sign" component={Sign} />
      <></>
    </Stack.Navigator>
  );
};

export default VerificationStack;
