import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";
import { LinkButton, Text, Badge } from "../../../components";
import { colors } from "../../../constants";
import { ScrollView } from "react-native";

const Badges = () => {
  return (
    <View>
      <View style={styles.BadgeText}>
        <Text
          variant="h3"
          lightColor={colors.light.titleTextColor}
          style={{ marginLeft: 18 }}
        >
          BADGES
        </Text>

        <LinkButton style={{ marginRight: 18 }}>View all</LinkButton>
      </View>
      <View style={styles.Badges}>
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
    backgroundColor: colors.light.backgroundSecondary,
  },
  BadgeText: {
    marginTop: 2,
    flexDirection: "row",
    backgroundColor: colors.light.backgroundSecondary,
    padding: 10,
    justifyContent: "space-between",
  },
});
