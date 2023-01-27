import { SafeAreaView } from "react-native";
import { useThemeColor } from "../../../hooks";
import { ShadowView, View, TopHeader } from "../../../components";
import styles from "./Leaderboard.styles";
import { NavigationProp } from "@react-navigation/native";
import LeaderboardNavBar from "../components/LeaderboardNavBar/LeaderboardNavBar.component";

interface LeaderboardProps {
  navigation: NavigationProp<any>;
}

const Leaderboard = (props: LeaderboardProps) => {
  const { navigation } = props;
  const backgroundSecondary = useThemeColor("backgroundSecondary");

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <TopHeader
        screenName={"Leaderboard"}
        iconNames={["search"]}
        iconColors={["primary"]}
        children={() => <LeaderboardCoreScreen />}
      />
    </SafeAreaView>
  );
};

export default Leaderboard;

const LeaderboardCoreScreen = () => {
  return (
    <View backgroundColor="background" style={styles.leaderScreen}>
      <ShadowView
        backgroundColor="backgroundSecondary"
        style={styles.leaderboardContainer}
      >
        <LeaderboardNavBar />
      </ShadowView>
    </View>
  );
};
