import { StyleProp, ViewStyle, TouchableOpacity } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { Text } from "../Text";
import { View } from "../View";
import { Icon } from "../Icon";
import { ShadowView } from "../ShadowView";
import styles from "./Header.styles";
import { Feather } from "@expo/vector-icons";

interface HeaderProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  icon1Name: keyof typeof Feather.glyphMap;
  icon2Name?: keyof typeof Feather.glyphMap;
  icon1Color: "primary" | "smallText" | "primaryBackground";
  icon2Color?: "primary" | "smallText" | "primaryBackground";
  navigation: NavigationProp<any>;
}

export const Header = (props: HeaderProps) => {
  const {
    title,
    style,
    icon1Name,
    icon2Name,
    icon1Color,
    icon2Color,
    navigation,
  } = props;

  return (
    <ShadowView
      shadowOffset={4}
      backgroundColor="backgroundSecondary"
      style={styles.headerBar}
    >
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
      </View>

      {icon2Name ? (
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Icon
              name={icon1Name}
              color={icon1Color}
              size="large"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name={icon2Name} color={icon2Color} size="large" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Icon
              name={icon1Name}
              color={icon1Color}
              size="large"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
      )}
    </ShadowView>
  );
};

export default Header;
