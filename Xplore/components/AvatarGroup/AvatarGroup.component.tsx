import { View } from "../View";
import { Avatar } from "../Avatar";
import styles from "./AvatarGroup.styles";

interface AvatarGroupProps {
  usersAvatars: string[];
}

export const AvatarGroup = (props: AvatarGroupProps) => {
  const avatarCount = props.usersAvatars.length - 3;
  return (
    <View>
      {props.usersAvatars.length > 4 ? (
        <View style={styles.groupAvatarContainer}>
          {props.usersAvatars.slice(0, 3).map((avatar, key) => (
            <Avatar
              key={key}
              name="Username"
              imageURL={avatar}
              size={60}
              style={styles.singleAvatar}
            />
          ))}
          <Avatar
            name="+"
            avatarCount={avatarCount}
            size={60}
            style={styles.singleAvatar}
          />
        </View>
      ) : (
        <View style={styles.groupAvatarContainer}>
          {props.usersAvatars.map((avatar, key) => (
            <Avatar
              key={key}
              name="Username"
              imageURL={avatar}
              size={60}
              style={styles.singleAvatar}
            />
          ))}
        </View>
      )}
    </View>
  );
};
