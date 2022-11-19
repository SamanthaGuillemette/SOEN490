import { View } from "../View";
import { View as RNView } from "react-native-ui-lib";
import { Icon } from "../Icon";
import { useThemeColor } from "../../hooks";
import { Avatar, AvatarProps } from "../Avatar/Avatar.component";
import styles from "./AvatarList.styles";

interface AvatarListProps {
  users: AvatarProps[];
}

export const AvatarList = (props: AvatarListProps) => {
  const primary = useThemeColor("primary");
  const backgroundSecondary = useThemeColor("backgroundSecondary");

  return (
    <View style={styles.avatarListContainer}>
      {props.users.map((user: AvatarProps, index: number) => {
        if (index === 0) {
          return (
            <View key={index} style={styles.avatar}>
              <Avatar name={user.name} size={40} inList={true} />
            </View>
          );
        } else if (index < 3) {
          return (
            <View
              key={index}
              style={[
                styles.avatar,
                { translateX: -15 * index, zIndex: index },
              ]}
            >
              <Avatar name={user.name} size={40} inList={true} />
            </View>
          );
        }
      })}
      <RNView
        style={[
          styles.plusCircle,
          { borderColor: backgroundSecondary, backgroundColor: primary },
        ]}
      >
        <Icon name={"plus"} size={"large"} color={"generalGray"} />
      </RNView>
    </View>
  );
};
