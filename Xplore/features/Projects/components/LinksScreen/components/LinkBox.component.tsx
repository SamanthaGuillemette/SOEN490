import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import { Text, Icon } from "../../../../../components";
import { AddButton } from "../../../../../components/AddButton";
import { useThemeColor } from "../../../../../hooks";
import styles from "./LinkBox.styles";

interface LinkBoxProps {
  linkName: string;
  description: string;
  iconName: keyof typeof Feather.glyphMap;
}

export const LinkBox = (props: LinkBoxProps) => {
  const whiteBackground = useThemeColor("backgroundSecondary");
  return (
    <View style={[styles.mainContainer, { backgroundColor: whiteBackground }]}>
      <View style={styles.linkBox}>
        <Text variant="h3" color="titleText">
          {props.linkName}{" "}
        </Text>
        <Icon
          name={props.iconName}
          color="primary"
          size="large"
          style={styles.icon}
        />
      </View>
      <Text variant="smBody" color="bodyText">
        {" "}
        {props.description}
      </Text>
      <AddButton />
    </View>
  );
};

export default LinkBox;
