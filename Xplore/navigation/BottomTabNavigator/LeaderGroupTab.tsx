import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Leaderboard from "../../features/Leaderboard/screens/Leaderboard.screen";

const LeaderGroup = createNativeStackNavigator();

const LeaderGroupTab = () => {
  return (
    <LeaderGroup.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <LeaderGroup.Screen name="Leaderboard" component={Leaderboard} />
    </LeaderGroup.Navigator>
  );
};

export default LeaderGroupTab;
