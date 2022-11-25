import { ScrollView, View } from "react-native";
import { Text, Icon } from "../../../../components";
import { AddButton } from "../../../../components/AddButton";
import { useThemeColor } from "../../../../hooks";
import styles from "./Links.styles";
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
