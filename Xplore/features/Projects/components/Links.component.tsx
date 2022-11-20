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

interface LinksProps {
  style?: StyleProp<ViewStyle>;
}

const Links = (props: LinksProps) => {
  const whiteBackground = useThemeColor("backgroundSecondary");
  const badgeBackground = useThemeColor("background");
  const primary = useThemeColor("primary");

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
      <View style={[styles.Box, { backgroundColor: whiteBackground }]}>
        <View style={{ flexDirection: "row" }}>
          <Text variant="h3" color="titleText">
            GitHub Integration{" "}
          </Text>
          <Icon name="github" color="primary" size="large" style={styles.a} />
        </View>
        <Text variant="smBody" color="bodyText">
          {" "}
          Description
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
