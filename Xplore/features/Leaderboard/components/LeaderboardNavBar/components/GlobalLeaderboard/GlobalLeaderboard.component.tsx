import { ScrollView } from "react-native-gesture-handler";
import UserRank from "../../../UserRank/UserRank.component";

export const GlobalLeaderboard = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <UserRank
        avatar="https://picsum.photos/200"
        username="Josh Lewis"
        xp={103597}
        rank={1}
      />
      <UserRank
        avatar="https://picsum.photos/200"
        username="Amy Lucas"
        xp={103597}
        rank={2}
      />
      <UserRank
        avatar="https://picsum.photos/200"
        username="Landon Clayton"
        xp={103597}
        rank={3}
      />
      <UserRank
        avatar="https://picsum.photos/200"
        username="Elva Moore"
        xp={103597}
        rank={4}
      />
    </ScrollView>
  );
};
