import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sign from "../features/Sign/screens/Sign.screen";
import ForgotPassword from "../features/Sign/components/ForgotPassword/ForgotPassword.screen";
import ResetPassword from "../features/Sign/components/ResetPassword/ResetPassword.screen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Sign"
    >
      <Stack.Screen name="Sign" component={Sign} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
