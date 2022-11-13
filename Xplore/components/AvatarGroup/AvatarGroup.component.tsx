import { View } from "../View";
import { Avatar } from "../Avatar";
import styles from "./AvatarGroup.styles";

interface AvatarGroupProps {}

export const AvatarGroup = (props: AvatarGroupProps) => {
  return (
    <View style={styles.groupAvatarContainer}>
      <Avatar
        name="Username"
        imageURL={"https://picsum.photos/200"}
        size={60}
        style={styles.singleAvatar}
      />
      <Avatar
        name="Username"
        imageURL={"https://picsum.photos/200"}
        size={60}
        style={styles.singleAvatar}
      />
      <Avatar
        name="Username"
        imageURL={"https://picsum.photos/200"}
        size={60}
        style={styles.singleAvatar}
      />
    </View>
  );
};
