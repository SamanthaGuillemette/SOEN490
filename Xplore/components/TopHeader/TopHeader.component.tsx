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
  iconNames: (keyof typeof Feather.glyphMap)[];
  iconColors: ("primary" | "smallText" | "primaryBackground")[];
  isChat?: boolean;
  isUserActive?: boolean;
  navigation: NavigationProp<any>;
  onPressIcon1?: any;
  onPressIcon2?: any;
  children: any;
}

const Stack = createNativeStackNavigator();

export const TopHeader = (props: TopHeaderProps) => {
  const {
    title,
    iconNames,
    iconColors,
    isChat,
    isUserActive,
    children,
    navigation,
    onPressIcon1,
    onPressIcon2,
  } = props;
  const smallText = useThemeColor("smallText");
  const success = useThemeColor("success");

  const headerTitle = () => (
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
  );

  /*const headerLeft = () => (
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
  );*/

  const headerRight = () => (
    <View style={[styles.rowAlign, styles.bottomMargin]}>
      <TouchableOpacity onPress={onPressIcon1}>
        <Icon
          name={iconNames[0]}
          color={iconColors[0]}
          size="large"
          style={styles.iconAlign}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressIcon2}>
        <Icon name={iconNames[1]} color={iconColors[1]} size="large" />
      </TouchableOpacity>
    </View>
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Header"
        component={children}
        options={{
          headerTitle: headerTitle,
          //headerLeft: headerLeft,
          headerRight: headerRight,
        }}
      />
    </Stack.Navigator>
  );
};
