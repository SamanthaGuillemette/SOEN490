import { Image, View } from "react-native";
import { useThemeColor } from "../../hooks";
import styles from "./Avatar.styles";

interface AvatarProps {
  image: any;
}

export const Avatar = ({ image }: AvatarProps) => {
  const primary = useThemeColor("primary");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  return (
    <View style={[styles.avatar_container, { shadowColor: primary }]}>
      <Image
        style={[styles.avatar, { borderColor: backgroundSecondary }]}
        source={image}
      />
    </View>
  );
};
