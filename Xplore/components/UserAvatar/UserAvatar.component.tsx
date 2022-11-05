import { Avatar } from "react-native-paper";
import { View } from "../View";
import styles from "./UserAvatar.styles";
import { ShadowView } from "../ShadowView";
import { useThemeColor } from "../../hooks";
import { profileArray } from "../../assets/imageManager";

interface UserAvatarProps {
  index: number;
  size: 135 | 60 | 45 | 31;
}

export const UserAvatar = (props: UserAvatarProps) => {
  const { index, size } = props;
  const whiteBackground = useThemeColor("backgroundSecondary");
  let image = profileArray[index];

  return (
    <View style={styles.Avatar}>
      <ShadowView style={[styles.Image, { borderColor: whiteBackground }]}>
        <Avatar.Image size={size} source={image} />
      </ShadowView>
    </View>
  );
};

export default UserAvatar;
