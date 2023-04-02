import { View } from "../View";
import { Avatar } from "../Avatar";
import styles from "./AvatarGroup.styles";

interface AvatarGroupProps {
  usersAvatars: any[];
}

export const AvatarGroup = (props: AvatarGroupProps) => {
  const usersAvatarsArray = Object.values(props.usersAvatars);
  const avatarCount = usersAvatarsArray.length - 3;
  return (
    <View>
      {usersAvatarsArray.length > 4 ? (
        <View style={styles.groupAvatarContainer}>
          {usersAvatarsArray.slice(0, 3).map(({ avatar, username }, index) => (
            <Avatar
              key={index}
              name={username}
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
          {usersAvatarsArray.map(({ avatar, username }, index) => (
            <Avatar
              key={index}
              name={username}
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
