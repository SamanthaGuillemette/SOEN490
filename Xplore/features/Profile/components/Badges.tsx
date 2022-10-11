import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";
import { Text } from "../../../components";
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
        <Text variant="body" color="linkText" style={{ marginRight: 18 }}>
          View all
        </Text>
      </View>
      <View style={styles.Badges}>
        <ScrollView horizontal={true}>
          <Avatar.Image
            style={(styles.Badge, { marginLeft: 25 })}
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
    marginHorizontal: 10,
  },
  BadgeText: {
    marginTop: 2,
    flexDirection: "row",
    backgroundColor: colors.light.backgroundSecondary,
    padding: 10,
    justifyContent: "space-between",
  },
});
