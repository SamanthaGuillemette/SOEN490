import { StyleSheet, View } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { LinkButton, Text } from "../../../components";
import { colors } from "../../../constants";
import { ScrollView } from "react-native";

const Badges = () => {
  return (
    <View>
      <View style={styles.BadgeText}>
        <Text
          variant="h3"
          lightColor={colors.light.primary}
          style={{ marginLeft: 18 }}
        >
          BADGES
        </Text>

        <LinkButton style={{ marginRight: 18 }}>View all</LinkButton>
      </View>
      <View style={styles.Badges}>
        <ScrollView horizontal={true}>
          <Avatar.Image
            style={{ marginLeft: 25 }}
            size={75}
            source={require("../../../assets/badge1.png")}
          />
          <Avatar.Image
            style={styles.Badge}
            size={75}
            source={require("../../../assets/badge2.png")}
          />
          <Avatar.Image
            size={75}
            source={require("../../../assets/badge3.png")}
          />
          <Avatar.Image
            style={styles.Badge}
            size={75}
            source={require("../../../assets/badge4.png")}
          />
          <Avatar.Image
            size={75}
            source={require("../../../assets/badge1.png")}
          />
          <Avatar.Image
            style={styles.Badge}
            size={75}
            source={require("../../../assets/badge2.png")}
          />
          <Avatar.Image
            size={75}
            source={require("../../../assets/badge3.png")}
          />
          <Avatar.Image
            style={styles.Badge}
            size={75}
            source={require("../../../assets/badge4.png")}
          />
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
  Badge: {
    marginHorizontal: 20,
  },
  BadgeText: {
    marginTop: 2,
    flexDirection: "row",
    backgroundColor: colors.light.backgroundSecondary,
    padding: 10,
    justifyContent: "space-between",
  },
});
