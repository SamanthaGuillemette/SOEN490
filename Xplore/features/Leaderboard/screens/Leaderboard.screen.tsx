import { SafeAreaView, ScrollView } from "react-native";
import { useThemeColor } from "../../../hooks";
import { ShadowView, View } from "../../../components";
import TopHeader from "../../../navigation/TopHeader.component";
import { NavigationProp } from "@react-navigation/native";
import { useListUsers } from "../../../services/api/search";
import UserRank from "../components/UserRank/UserRank.component";
import styles from "./Leaderboard.styles";

interface LeaderboardProps {
  navigation: NavigationProp<any>;
}

const Leaderboard = (props: LeaderboardProps) => {
  const { navigation } = props;
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const users = useListUsers(true);
  users.sort((a, b) => b.xp - a.xp);

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
          <ScrollView showsVerticalScrollIndicator={false}>
            {users.map((user, index) => (
              <UserRank
                key={user.id}
                id={user.id}
                avatar={user.avatar}
                username={user.username}
                xp={user.xp}
                rank={index + 1}
              />
            ))}
          </ScrollView>
        </ShadowView>
      </View>
    </SafeAreaView>
  );
};

export default Leaderboard;
