import {
  ScrollView,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Text, Icon, LinkButton } from "../../../components";
import { colors } from "../../../constants";
import { useThemeColor } from "../../../hooks";

interface LinksProps {
  style?: StyleProp<ViewStyle>;
}

const Links = (props: LinksProps) => {
  const whiteBackground = useThemeColor("backgroundSecondary");
  return (
    <ScrollView>
      <View style={[styles.Box, { backgroundColor: whiteBackground }]}>
        <View style={{ flexDirection: "row" }}>
          <Text variant="h3">GitHub Integration </Text>
          <Icon name="github" color="primary" size="large" style={styles.a} />
        </View>
        <Text variant="body"> Description</Text>
        <LinkButton>ADD</LinkButton>
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
    height: 110,
    width: 320,
  },
  a: {
    marginLeft: 60,
  },
});
