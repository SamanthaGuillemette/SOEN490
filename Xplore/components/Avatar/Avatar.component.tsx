import { StyleProp, ViewStyle, Image, View } from "react-native";
import { useThemeColor } from "../../hooks";
import styles from "./Avatar.styles";

interface AvatarProps {
  image: any;
  style?: StyleProp<ViewStyle>;
}

export const Avatar = ({ image, style }: AvatarProps) => {
  const primary = useThemeColor("primary");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  return (
    <View style={[style, styles.avatar_container, { shadowColor: primary }]}>
      <Image
        style={[styles.avatar, { borderColor: backgroundSecondary }]}
        source={image}
      />
    </View>
  );
};
