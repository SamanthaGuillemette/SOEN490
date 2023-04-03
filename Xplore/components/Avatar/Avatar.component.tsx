import {
  Image,
  StyleProp,
  ViewProps,
  ViewStyle,
  View as RNView,
} from "react-native";
import { useThemeColor } from "../../hooks";
import { Icon } from "../Icon";
import { View } from "../View";
import { Text } from "../Text";
import styles from "./Avatar.styles";

interface AvatarProps extends ViewProps {
  name: String;
  groupChat?: boolean;
  avatarCount?: number;
  imageURL?: URL;
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

  const hashString = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      // eslint-disable-next-line no-bitwise
      hash = (hash << 5) - hash + charCode;
      // eslint-disable-next-line no-bitwise
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  const getColorFromName = (username: any) => {
    const hash = Math.abs(hashString(username));
    // eslint-disable-next-line no-bitwise
    const r = (hash & 0xff0000) >> 16;
    // eslint-disable-next-line no-bitwise
    const g = (hash & 0x00ff00) >> 8;
    // eslint-disable-next-line no-bitwise
    const b = hash & 0x0000ff;
    return `rgb(${r},${g},${b})`;
  };

  const primary = useThemeColor("primary");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const avatarDisplayName = name?.charAt(0).toUpperCase();
  const avatarColor = getColorFromName(name);

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
      ) : imageURL ? (
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
          testID={imageURL.toString()}
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
        <RNView
          style={[
            styles.textAvatar,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: avatarColor,
            },
          ]}
        >
          <Text style={styles.textAvatarText} variant="h2">
            {avatarDisplayName}
          </Text>
        </RNView>
      )}
    </View>
  );
};
