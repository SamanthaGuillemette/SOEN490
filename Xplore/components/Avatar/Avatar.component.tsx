import { useThemeColor } from "../../hooks";
import { Image, StyleProp, ViewProps, ViewStyle } from "react-native";
import styles from "./Avatar.styles";
import { View } from "../View";
import { Text } from "../Text";

export interface AvatarProps extends ViewProps {
  name: string;
  imageURL?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
  inList?: boolean;
}

export const Avatar = (props: AvatarProps) => {
  // Default size to '60'
  const {
    name,
    imageURL,
    size = 60,
    style,
    inList = false,
    ...restOfProps
  } = props;

  const primary = useThemeColor("primary");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const avatarDisplayName = name.charAt(0).toUpperCase();

  return (
    <View
      style={[style, styles.avatarContainer, { shadowColor: primary }]}
      {...restOfProps}
    >
      {imageURL ? (
        <Image
          style={
            inList
              ? [
                  styles.avatar,
                  {
                    borderColor: backgroundSecondary,
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                  },
                  { borderWidth: 2, borderColor: backgroundSecondary },
                ]
              : [
                  styles.avatar,
                  {
                    borderColor: backgroundSecondary,
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                  },
                ]
          }
          source={{ uri: `${imageURL}` }}
        />
      ) : (
        <View
          backgroundColor="primary"
          style={
            inList
              ? [
                  styles.textAvatar,
                  { width: size, height: size, borderRadius: size / 2 },
                  { borderWidth: 2, borderColor: backgroundSecondary },
                ]
              : [
                  styles.textAvatar,
                  { width: size, height: size, borderRadius: size / 2 },
                ]
          }
        >
          <Text style={styles.textAvatarText} variant="h2">
            {avatarDisplayName}
          </Text>
        </View>
      )}
    </View>
  );
};
