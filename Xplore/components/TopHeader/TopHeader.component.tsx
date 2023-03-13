import { StyleProp, ViewStyle, TouchableOpacity, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { ShadowView } from "../ShadowView";
import styles from "./TopHeader.styles";
import { Feather } from "@expo/vector-icons";
import { useThemeColor } from "../../hooks";

interface TopHeaderProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  icon1Name: keyof typeof Feather.glyphMap;
  icon2Name?: keyof typeof Feather.glyphMap;
  icon1Color: "primary" | "smallText" | "primaryBackground";
  icon2Color?: "primary" | "smallText" | "primaryBackground";
  isMessaging?: boolean;
  isActive?: boolean;
  navigation?: NavigationProp<any> | any;
}

export const TopHeader = (props: TopHeaderProps) => {
  const {
    title,
    style,
    icon1Name,
    icon2Name,
    icon1Color,
    icon2Color,
    navigation,
    isMessaging,
    isActive,
  } = props;

  const smallText = useThemeColor("smallText");
  const success = useThemeColor("success");

  return (
    <ShadowView
      shadowOffset={4}
      backgroundColor="backgroundSecondary"
      style={styles.headerBar}
    >
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={
            typeof navigation === "object"
              ? () => navigation.goBack()
              : navigation
          }
        >
          <Icon
            style={styles.arrowIcon}
            name="chevron-left"
            color="primary"
            size="large"
          />
        </TouchableOpacity>
        <Text variant="h2" color="titleText" style={[style]}>
          {title}
        </Text>
        {isMessaging ? (
          <View
            style={[
              styles.active,
              isActive
                ? { backgroundColor: success }
                : { backgroundColor: smallText },
            ]}
          />
        ) : (
          ""
        )}
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <Icon
            name={icon1Name}
            color={icon1Color}
            size="large"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
        {icon2Name ? (
          <TouchableOpacity>
            <Icon name={icon2Name} color={icon2Color} size="large" />
          </TouchableOpacity>
        ) : (
          ""
        )}
      </View>
    </ShadowView>
  );
};

export default TopHeader;
