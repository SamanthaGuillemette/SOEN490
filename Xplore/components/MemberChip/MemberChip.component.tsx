import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useThemeColor } from "../../hooks";
import { Text } from "../Text";
import { Avatar } from "../Avatar";
import { Icon } from "../Icon";
import { View } from "../View";
import styles from "./MemberChip.styles";

interface MemberChipProps extends TouchableOpacityProps {
  username: string;
  avatar: string;
  style?: StyleProp<ViewStyle>;
}

export const MemberChip = (props: MemberChipProps) => {
  const generalGray = useThemeColor("generalGray");
  const titleText = useThemeColor("titleText");

  return (
    <View
      backgroundColor="background"
      style={[props.style, styles.button, { borderColor: generalGray }]}
    >
      <Avatar name={props.username} imageURL={props.avatar} size={45} />
      <Text variant="label" style={[styles.textStyle, { color: titleText }]}>
        {props.username}
      </Text>
      <TouchableOpacity>
        <Icon name="x" size="large" color="primaryBackground" />
      </TouchableOpacity>
    </View>
  );
};
