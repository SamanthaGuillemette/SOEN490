import { SafeAreaView } from "react-native";
import { useThemeColor } from "../../../hooks";
import { ShadowView, View } from "../../../components";
import TopHeader from "../../../navigation/TopHeader.component";
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
      <TopHeader screenName={"Leaderboard"} navigation={navigation} />
      <View backgroundColor="background" style={styles.leaderScreen}>
        <ShadowView
          backgroundColor="backgroundSecondary"
          style={styles.leaderboardContainer}
        >
          <LeaderboardNavBar />
        </ShadowView>
      </View>
    </SafeAreaView>
  );
};

export default Leaderboard;
