import { View } from "../View";
import { Avatar } from "../Avatar";
import styles from "./AvatarGroup.styles";

interface AvatarGroupProps {
  usersAvatars: string[];
  scale?: number;
}

export const AvatarGroup = ({ scale = 3, ...props }: AvatarGroupProps) => {
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
              size={scale * 30}
              style={styles.singleAvatar}
            />
          ))}
          <Avatar
            name="+"
            avatarCount={avatarCount}
            size={scale * 20}
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
              size={scale * 20}
              style={styles.singleAvatar}
            />
          ))}
        </View>
      )}
    </View>
  );
};
