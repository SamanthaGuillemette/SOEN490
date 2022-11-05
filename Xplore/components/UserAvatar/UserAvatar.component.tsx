import { Avatar } from "react-native-paper";
import { View } from "../View";
import styles from "./UserAvatar.styles";
import { ShadowView } from "../ShadowView";
import { useThemeColor } from "../../hooks";

interface UserAvatarProps {
  imageName: string;
}

export const UserAvatar = (props: UserAvatarProps) => {
  const whiteBackground = useThemeColor("backgroundSecondary");

  let image;

  if (props.imageName === "Josh") {
    image = require("../../assets/Josh.png");
  } else {
    image = require("../../assets/badge1.png");
  }

  return (
    <View style={styles.Avatar}>
      <ShadowView style={[styles.Image, { borderColor: whiteBackground }]}>
        <Avatar.Image size={140} source={image} />
      </ShadowView>
    </View>
  );
};

export default UserAvatar;
