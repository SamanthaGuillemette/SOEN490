import { SafeAreaView } from "react-native";
import { useThemeColor } from "../../../hooks";
import { ShadowView, View } from "../../../components";
import UserRank from "../components/UserRank/UserRank.component";
import TopHeader from "../../../navigation/TopHeader.component";
import styles from "./Leaderboard.styles";
import { NavigationProp } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

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
      <View backgroundColor="background">
        <ShadowView
          backgroundColor="backgroundSecondary"
          style={styles.leaderboardContainer}
        >
          <ScrollView>
            <UserRank
              avatar="https://picsum.photos/200"
              username="Josh Lewis"
              xp={103597}
              rank="1"
            />
          </ScrollView>
        </ShadowView>
      </View>
    </SafeAreaView>
  );
};

export default Leaderboard;
