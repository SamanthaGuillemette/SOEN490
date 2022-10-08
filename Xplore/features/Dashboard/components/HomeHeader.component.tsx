import { StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { Text, View } from "../../../components";

const HomeHeader = () => {
  return (
    <View style={styles.homeHeaderBar}>
      <View>
        <Text variant="h1">Hi Josh,</Text>
        <Text>Ready for a new challenge?</Text>
        <TouchableOpacity>
          <Text variant="link">View your projects</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Avatar.Text size={40} label="JS" />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  homeHeaderBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 30,
    backgroundColor: "lightblue",
  },
});
