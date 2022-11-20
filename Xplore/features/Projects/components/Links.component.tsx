import {
  ScrollView,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Button,
  TouchableHighlight,
} from "react-native";
import { Text, Icon } from "../../../components";
import { colors } from "../../../constants";
import { useThemeColor } from "../../../hooks";
import { useState } from "react";
import { FlatList } from "react-native";

interface LinksProps {
  // style?: StyleProp<ViewStyle>;
  linkName: string;
  iconName: string;
  description: string;
}

export const Links = (props: LinksProps) => {
  const { linkName, iconName, description } = props;
  const whiteBackground = useThemeColor("backgroundSecondary");
  const badgeBackground = useThemeColor("background");
  const primary = useThemeColor("primary");

  const DATA = [
    {
      id: "1",
      linkName: "Github Integration",
      iconName: "github",
      description: "aaaa",
    },
    {
      id: "2",
      linkName: "Jira Integration",
      iconName: "github",
      description: "aaaa",
    },
    {
      id: "3",
      linkName: "Figma Integration",
      iconName: "github",
      description: "aaaa",
    },
  ];

  const Item = ({ linkName, iconName, description }) => (
    <View style={[styles.Box, { backgroundColor: whiteBackground }]}>
      <View style={{ flexDirection: "row" }}>
        <Text variant="h3" color="titleText">
          {linkName}{" "}
        </Text>
        <Icon name={iconName} color="primary" size="large" style={styles.a} />
      </View>
      <Text variant="smBody" color="bodyText">
        {" "}
        {description}
      </Text>
      <View style={styles.container}>
        <TouchableHighlight {...touchProps}>
          <Button
            onPress={() => {
              setPressed(false);
            }}
            disabled={!isPressed}
            title={isPressed ? "ADD" : "ADDED"}
            color="white"
          />
        </TouchableHighlight>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item
      linkName={item.linkName}
      iconName={item.iconName}
      description={item.description}
    />
  );

  const [isPressed, setPressed] = useState(true);
  const touchProps = {
    activeOpacity: 1,
    underlayColor: "red",
    style: isPressed ? styles.btnNormal : styles.btnPressed,
    onHideUnderlay: () => setPressed(false),
    onShowUnderlay: () => setPressed(true),
  };

  return (
    <ScrollView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

export default Links;

const styles = StyleSheet.create({
  Box: {
    justifyContent: "space-between",
    borderRadius: 8,
    padding: 30,
    backgroundColor: colors.light.backgroundSecondary,
    marginTop: 20,
    height: 120,
    width: 320,
  },
  a: {
    marginLeft: 60,
  },
  btnNormal: {
    marginLeft: 2,
    backgroundColor: colors.light.primary,
    borderRadius: 8,
    height: 35,
    width: 70,
  },
  btnPressed: {
    marginLeft: 2,
    backgroundColor: colors.light.backgroundSecondary,
    borderColor: colors.light.success,
    borderRadius: 8,
    borderWidth: 1,
    height: 35,
    width: 76,
  },
  container: {
    flex: 1,
  },
});
