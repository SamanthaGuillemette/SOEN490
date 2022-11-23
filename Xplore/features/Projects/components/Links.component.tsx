import { ScrollView, View, StyleSheet } from "react-native";
import { Text, Icon } from "../../../components";
import { AddButton } from "../../../components/AddButton";
import { colors } from "../../../constants";
import { useThemeColor } from "../../../hooks";

interface LinksProps {}

export const Links = (props: LinksProps) => {
  const whiteBackground = useThemeColor("backgroundSecondary");
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
          <AddButton />
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
          <AddButton />
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
          <AddButton />
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
