import { User, Text, View } from "../../../../components";
import styles from "./UserRank.styles";

interface UserRankProps {
  avatar: string;
  username: string;
  xp: number;
  rank: number;
}

const UserRank = (props: UserRankProps) => {
  const { avatar, username, xp, rank } = props;
  return (
    <View style={styles.userRankContainer}>
      <Text style={styles.userRank} color="titleText">
        {rank}
      </Text>
      <User avatar={avatar} username={username} xp={xp} />
    </View>
  );
};

export default UserRank;
