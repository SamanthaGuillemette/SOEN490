import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Leaderboard from "../../features/Leaderboard/screens/Leaderboard.screen";

const LeaderStack = createNativeStackNavigator();

const LeaderTab = () => {
  return (
    <LeaderStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <LeaderStack.Screen name="Leaderboard" component={Leaderboard} />
    </LeaderStack.Navigator>
  );
};

export default LeaderTab;
