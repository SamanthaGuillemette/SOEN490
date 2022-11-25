import { TouchableOpacity, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { Text } from "../Text";
import { Icon } from "../Icon";
import styles from "./TopHeader.styles";
import { Feather } from "@expo/vector-icons";
import { useThemeColor } from "../../hooks";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

interface TopHeaderProps {
  title: string;
  icon1Name: keyof typeof Feather.glyphMap;
  icon2Name?: keyof typeof Feather.glyphMap;
  icon1Color?: "primary" | "smallText" | "primaryBackground";
  icon2Color?: "primary" | "smallText" | "primaryBackground";
  isChat?: boolean;
  isUserActive?: boolean;
  navigation: NavigationProp<any>;
  children: any;
}

const Stack = createNativeStackNavigator();

export const TopHeader = (props: TopHeaderProps) => {
  const {
    title,
    children,
    icon1Name,
    icon2Name,
    icon1Color,
    icon2Color,
    navigation,
    isChat,
    isUserActive,
  } = props;
  const smallText = useThemeColor("smallText");
  const success = useThemeColor("success");

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Header"
        component={children}
        options={{
          headerTitle: () => (
            <View style={[styles.rowAlign, styles.bottomMargin]}>
              <Text variant="h2" color="titleText" style={styles.alignTitle}>
                {title}
              </Text>
              {isChat ? (
                <View
                  style={[
                    styles.active,
                    isUserActive
                      ? { backgroundColor: success }
                      : { backgroundColor: smallText },
                  ]}
                />
              ) : (
                ""
              )}
            </View>
          ),
          headerLeft: () => (
            <View style={[styles.rowAlign, styles.bottomMargin]}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  style={styles.arrowIcon}
                  name="chevron-left"
                  color="primary"
                  size="large"
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={[styles.rowAlign, styles.bottomMargin]}>
              <TouchableOpacity>
                <Icon
                  name={icon1Name}
                  color={icon1Color}
                  size="large"
                  style={styles.iconAlign}
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
          ),
        }}
      />
    </Stack.Navigator>
  );
};
