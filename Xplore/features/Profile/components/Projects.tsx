import { StyleSheet, View, Image } from "react-native";
import { Text } from "../../../components";
import { colors } from "../../../constants";

const Projects = () => {
  return (
    <View>
      <View style={styles.ProjectText}>
        <Text
          variant="h3"
          lightColor={colors.light.primary}
          style={{ marginLeft: 18 }}
        >
          PROJECTS
        </Text>
        <Text variant="body" color="linkText" style={{ marginRight: 18 }}>
          View all
        </Text>
      </View>
      <View style={styles.Projects}>
        <Image
          style={{
            marginVertical: 15,
            height: 200,
            width: 270,
            borderRadius: 7,
            opacity: 0.6,
          }}
          source={require("../../../assets/SnakeRobot.png")}
        />
        <Image
          style={{
            height: 230,
            width: 300,
            borderRadius: 7,
            opacity: 0.6,
            marginHorizontal: 15,
          }}
          source={require("../../../assets/SnakeRobot.png")}
        />
        <Image
          style={{
            marginVertical: 15,
            height: 200,
            width: 270,
            borderRadius: 7,
            opacity: 0.6,
          }}
          source={require("../../../assets/SnakeRobot.png")}
        />
      </View>
    </View>
  );
};

export default Projects;

const styles = StyleSheet.create({
  Projects: {
    backgroundColor: colors.light.backgroundSecondary,
    paddingBottom: 50,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "center",
  },
  Project: {
    marginHorizontal: 10,
  },
  ProjectText: {
    marginTop: 2,
    flexDirection: "row",
    backgroundColor: colors.light.backgroundSecondary,
    padding: 10,
    justifyContent: "space-between",
  },
});
