import { StyleProp, ViewStyle, TouchableOpacityProps } from "react-native";
import { useThemeColor } from "../../hooks";
import { Text } from "../Text";
import { Avatar } from "../Avatar";
import { View } from "../View";
import styles from "./Member.styles";

interface MemberProps extends TouchableOpacityProps {
  userName: string;
  avatar: string;
  style?: StyleProp<ViewStyle>;
}

export const Member = (props: MemberProps) => {
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
    </View>
  );
};
