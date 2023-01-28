import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useThemeColor } from "../../hooks";
import { Text, Avatar, Icon, View } from "../";
import styles from "./MemberChip.styles";

interface ChipButtonProps extends TouchableOpacityProps {
  userName: string;
  avatar: string;
  style?: StyleProp<ViewStyle>;
}

export const MemberChip = (props: ChipButtonProps) => {
  const generalGray = useThemeColor("generalGray");
  const titleText = useThemeColor("titleText");

  return (
    <View
      backgroundColor="background"
      style={[props.style, styles.button, { borderColor: generalGray }]}
    >
      <Avatar name={props.userName} imageURL={props.avatar} size={45} />
      <Text variant="label" style={[styles.textStyle, { color: titleText }]}>
        {props.userName}
      </Text>
      <TouchableOpacity>
        <Icon name="x" size="large" color="primaryBackground" />
      </TouchableOpacity>
    </View>
  );
};
