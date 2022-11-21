import { StyleSheet, View } from "react-native";
import { LinkButton, Text, Badge } from "../../../components";
import { ScrollView } from "react-native";
import { useThemeColor } from "../../../hooks";

const Badges = () => {
  const whiteBackground = useThemeColor("backgroundSecondary");

  return (
    <View>
      <View style={[styles.BadgeText, , { backgroundColor: whiteBackground }]}>
        <Text variant="h3" color="titleText" style={{ marginLeft: 18 }}>
          BADGES
        </Text>

        <LinkButton style={{ marginRight: 18 }}>View all</LinkButton>
      </View>
      <View style={[styles.Badges, , { backgroundColor: whiteBackground }]}>
        <ScrollView horizontal={true}>
          <Badge index={0} />
          <Badge index={1} />
          <Badge index={2} />
          <Badge index={3} />
          <Badge index={0} />
          <Badge index={1} />
          <Badge index={2} />
          <Badge index={3} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Badges;

const styles = StyleSheet.create({
  Badges: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 35,
    paddingTop: 15,
  },
  BadgeText: {
    marginTop: 2,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
});
