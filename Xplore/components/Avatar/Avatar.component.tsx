import { useThemeColor } from "../../hooks";
import { Image, StyleProp, ViewProps, ViewStyle } from "react-native";
import styles from "./Avatar.styles";
import { Icon } from "../Icon";
import { View } from "../View";
import { Text } from "../Text";

interface AvatarProps extends ViewProps {
  name: String;
  groupChat?: boolean;
  avatarCount?: number;
  imageURL?: String;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

export const Avatar = (props: AvatarProps) => {
  // Default size to '60'
  const {
    name,
    imageURL,
    groupChat,
    size = 60,
    style,
    avatarCount,
    ...restOfProps
  } = props;

  const primary = useThemeColor("primary");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const avatarDisplayName = name?.charAt(0)?.toUpperCase();

  return (
    <View
      style={[style, styles.avatarContainer, { shadowColor: primary }]}
      {...restOfProps}
    >
      {groupChat ? (
        <Icon
          name="users"
          style={[
            styles.chatBox_groupAvatar,
            {
              backgroundColor: backgroundSecondary,
              borderColor: backgroundSecondary,
              width: size,
              height: size,
              borderRadius: size / 2,
            },
          ]}
        />
      ) : imageURL !== "null" && imageURL ? (
        <Image
          style={[
            styles.avatar,
            {
              borderColor: backgroundSecondary,
              width: size,
              height: size,
              borderRadius: size / 2,
            },
          ]}
          source={{ uri: `${imageURL}` }}
        />
      ) : avatarCount ? (
        <View
          backgroundColor="primary"
          style={[
            styles.textAvatar,
            { width: size, height: size, borderRadius: size / 2 },
          ]}
        >
          <Text style={styles.textAvatarText} variant="h3">
            +{avatarCount}
          </Text>
        </View>
      ) : (
        <View
          backgroundColor="primary"
          style={[
            styles.textAvatar,
            { width: size, height: size, borderRadius: size / 2 },
          ]}
        >
          <Text style={styles.textAvatarText} variant="h2">
            {avatarDisplayName}
          </Text>
        </View>
      )}
    </View>
  );
};
