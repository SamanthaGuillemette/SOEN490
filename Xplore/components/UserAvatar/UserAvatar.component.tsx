import { Avatar } from "react-native-paper";
import { View } from "../View";
import styles from "./UserAvatar.styles";
import { ShadowView } from "../ShadowView";

interface UserAvatarProps {
  imageName: string;
}

export const UserAvatar = (props: UserAvatarProps) => {
  let image;

  if (props.imageName === "Josh") {
    image = require("../../assets/Josh.png");
  } else {
    image = require("../../assets/badge1.png");
  }

  return (
    <ShadowView style={styles.Avatar}>
      <View style={styles.Image}>
        <Avatar.Image size={140} source={image} />
      </View>
    </ShadowView>
  );
};

export default UserAvatar;
