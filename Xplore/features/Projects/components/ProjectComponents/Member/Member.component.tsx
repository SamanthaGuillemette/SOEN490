import { View } from "../../../../../components/View";
import { Avatar } from "../../../../../components/Avatar";
import { Text } from "../../../../../components/Text";
import { useThemeColor } from "../../../../../hooks";
import styles from "./Member.styles";
import MessageButton from "../MessageButton/MessageButton.component";

interface MemberProps {
  avatar: string;
  username: string;
  xp: string;
}

const Member = (props: MemberProps) => {
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  return (
    <View style={styles.user_container}>
      <Avatar
        name="Username"
        imageURL={props.avatar}
        size={45}
        style={styles.user_avatar}
      />
      <View style={{ backgroundColor: backgroundSecondary }}>
        <Text variant="label" style={styles.username}>
          {props.username}
        </Text>
        <Text variant="smLabel" color="smallText" style={styles.user_xp}>
          {props.xp} &nbsp; XP
        </Text>
      </View>
      <MessageButton />
    </View>
  );
};

export default Member;
