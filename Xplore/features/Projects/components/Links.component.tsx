import {
  ScrollView,
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
} from "react-native";
import { Text, Icon } from "../../../components";
import { colors } from "../../../constants";
import { useThemeColor } from "../../../hooks";
import { useState } from "react";

interface LinksProps {}

export const Links = (props: LinksProps) => {
  const whiteBackground = useThemeColor("backgroundSecondary");
  const primary = useThemeColor("primary");

  const [isPressed, setPressed] = useState(true);
  const [isPressed2, setPressed2] = useState(true);
  const [isPressed3, setPressed3] = useState(true);
  const touchButton1 = {
    activeOpacity: 1,
    style: isPressed ? styles.buttonNormal : styles.buttonPressed,
  };
  const touchButton2 = {
    activeOpacity: 1,
    style: isPressed2 ? styles.buttonNormal : styles.buttonPressed,
  };
  const touchButton3 = {
    activeOpacity: 1,
    style: isPressed3 ? styles.buttonNormal : styles.buttonPressed,
  };

  return (
    <ScrollView>
      <View
        style={[styles.mainContainer, { backgroundColor: whiteBackground }]}
      >
        <View style={{ flexDirection: "row" }}>
          <Text variant="h3" color="titleText">
            GitHub Integration{" "}
          </Text>
          <Icon
            name="github"
            color="primary"
            size="large"
            style={{ marginLeft: 60 }}
          />
        </View>
        <Text variant="smBody" color="bodyText">
          {" "}
          Description
        </Text>
        <View style={{ flex: 1 }}>
          <TouchableHighlight {...touchButton1}>
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
      <View
        style={[styles.mainContainer, { backgroundColor: whiteBackground }]}
      >
        <View style={{ flexDirection: "row" }}>
          <Text variant="h3" color="titleText">
            Jira Integration{" "}
          </Text>
          <Icon
            name="github"
            color="primary"
            size="large"
            style={{ marginLeft: 86 }}
          />
        </View>
        <Text variant="smBody" color="bodyText">
          {" "}
          Description
        </Text>
        <View style={{ flex: 1 }}>
          <TouchableHighlight {...touchButton2}>
            <Button
              onPress={() => {
                setPressed2(false);
              }}
              disabled={!isPressed2}
              title={isPressed2 ? "ADD" : "ADDED"}
              color="white"
            />
          </TouchableHighlight>
        </View>
      </View>
      <View
        style={[styles.mainContainer, { backgroundColor: whiteBackground }]}
      >
        <View style={{ flexDirection: "row" }}>
          <Text variant="h3" color="titleText">
            Figma Integration{" "}
          </Text>
          <Icon
            name="figma"
            color="primary"
            size="large"
            style={{ marginLeft: 60 }}
          />
        </View>
        <Text variant="smBody" color="bodyText">
          {" "}
          Description
        </Text>
        <View style={{ flex: 1 }}>
          <TouchableHighlight {...touchButton3}>
            <Button
              onPress={() => {
                setPressed3(false);
              }}
              disabled={!isPressed3}
              title={isPressed3 ? "ADD" : "ADDED"}
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
  mainContainer: {
    justifyContent: "space-between",
    borderRadius: 8,
    padding: 30,
    backgroundColor: colors.light.backgroundSecondary,
    marginTop: 20,
    height: 120,
    width: 320,
  },

  buttonNormal: {
    marginLeft: 2,
    backgroundColor: colors.light.primary,
    borderRadius: 8,
    height: 35,
    width: 70,
  },
  buttonPressed: {
    marginLeft: 2,
    backgroundColor: colors.light.backgroundSecondary,
    borderColor: colors.light.backgroundSecondary,
    borderRadius: 8,
    borderWidth: 1,
    height: 35,
    width: 76,
  },
});
