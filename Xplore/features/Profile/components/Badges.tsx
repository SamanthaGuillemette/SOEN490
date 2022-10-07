import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";
import { Text } from "../../../components";

const Badges = () => {
  return (
    <View>
      <View style={styles.BadgeText}>
        <Text variant="h4">Badges</Text>
        <View style={styles.Des}>
          <Text variant="body">View all</Text>
        </View>
      </View>
      <View style={styles.Badges}>
        <Avatar.Image
          style={styles.Badge}
          size={90}
          source={require("../../../assets/badge1.png")}
        />
        <Avatar.Image
          style={styles.Badge}
          size={90}
          source={require("../../../assets/badge2.png")}
        />
        <Avatar.Image
          style={styles.Badge}
          size={90}
          source={require("../../../assets/badge3.png")}
        />
        <Avatar.Image
          style={styles.Badge}
          size={90}
          source={require("../../../assets/badge4.png")}
        />
      </View>
    </View>
  );
};

export default Badges;

const styles = StyleSheet.create({
  Badges: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 30,
    backgroundColor: "white",
    TextColor: "red",
  },
  Badge: {
    marginHorizontal: 5,
    color: "red",
  },
  BadgeText: {
    marginTop: 5,
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    fontColor: "red",
  },
  Des: {
    marginLeft: 280,
  },
});
