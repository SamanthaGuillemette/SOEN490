import { View } from "../View";
import { User } from "../User";
import { ChipButton } from "../ChipButton";
import styles from "./MessageMember.styles";

interface MemberProps {
  avatar: string;
  username: string;
  xp: number;
}

const Member = (props: MemberProps) => {
  return (
    <View style={styles.user_container}>
      <View style={styles.usr}>
        <User avatar={props.avatar} username={props.username} xp={props.xp} />
      </View>
      <View style={styles.msg_button}>
        <ChipButton label="Message" />
      </View>
    </View>
  );
};

export default Member;
