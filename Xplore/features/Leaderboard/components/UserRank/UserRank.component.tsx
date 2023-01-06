import { User, Text, View } from "../../../../components";
import styles from "./UserRank.styles";

interface UserRankProps {
  avatar: string;
  username: string;
  xp: number;
  rank: string;
}

const UserRank = (props: UserRankProps) => {
  return (
    <View style={styles.userRankContainer}>
      <Text color="titleText">{props.rank}</Text>
      <User avatar={props.avatar} username={props.username} xp={props.xp} />
    </View>
  );
};

export default UserRank;
