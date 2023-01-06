import { View } from "../View";
import { Avatar } from "../Avatar";
import { Text } from "../Text";
import { useThemeColor } from "../../hooks";
import styles from "./User.styles";

interface UserProps {
  avatar: string;
  username: string;
  xp: number;
}

export const User = (props: UserProps) => {
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
    </View>
  );
};
