import { SafeAreaView } from "react-native";
import { useThemeColor } from "../../../hooks";
import { ShadowView, Text } from "../../../components";
import TopHeader from "../../../navigation/TopHeader.component";
import styles from "./Leaderboard.styles";
import { NavigationProp } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

interface LeaderboardProps {
  navigation: NavigationProp<any>;
}

const Leaderboard = (props: LeaderboardProps) => {
  const { navigation } = props;
  const background = useThemeColor("background");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <TopHeader screenName={"Leaderboard"} navigation={navigation} />
      <ScrollView style={{ backgroundColor: background }}>
        <ShadowView
          backgroundColor="backgroundSecondary"
          style={styles.leaderboardContainer}
        >
          <Text>view</Text>
        </ShadowView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Leaderboard;
