import { User, Text, View } from "../../../../components";
import styles from "./UserRank.styles";

interface UserRankProps {
  avatar: string;
  username: string;
  xp: number;
  rank: number;
  id: string;
}

const UserRank = (props: UserRankProps) => {
  const { avatar, username, xp, rank, id } = props;
  return (
    <View style={styles.userRankContainer}>
      <Text style={styles.userRank} color="primary">
        {rank}
      </Text>
      <User id={id} avatar={avatar} username={username} xp={xp} />
    </View>
  );
};

export default UserRank;
