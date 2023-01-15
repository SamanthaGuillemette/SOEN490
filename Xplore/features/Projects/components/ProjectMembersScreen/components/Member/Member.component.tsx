import { View, Avatar, Text, ChipButton } from "../../../../../../components";
import { useThemeColor } from "../../../../../../hooks";
import styles from "./Member.styles";

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
      <ChipButton label="Message" />
    </View>
  );
};

export default Member;
