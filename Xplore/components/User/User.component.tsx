import { StyleProp, ViewStyle } from "react-native";
import { View } from "../View";
import { Avatar } from "../Avatar";
import { Text } from "../Text";
import { useThemeColor } from "../../hooks";
import styles from "./User.styles";

interface UserProps {
  avatar: string;
  username: string;
  xp: number;
  style?: StyleProp<ViewStyle>;
}

export const User = (props: UserProps) => {
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const { avatar, username, xp, style } = props;
  return (
    <View style={[styles.user_container, style]}>
      <Avatar
        name="Username"
        imageURL={avatar}
        size={45}
        style={styles.user_avatar}
      />
      <View style={{ backgroundColor: backgroundSecondary }}>
        <Text color="titleText" variant="label" style={styles.username}>
          {username}
        </Text>
        <Text variant="smLabel" color="smallText" style={styles.user_xp}>
          {xp} &nbsp; XP
        </Text>
      </View>
    </View>
  );
};
