import { StyleSheet, View, Image } from "react-native";
import { Text } from "../../../components";
import { colors } from "../../../constants";

const Projects = () => {
  return (
    <View style={styles.Projects}>
      <View style={styles.Description}>
        <Text variant="h4">Projects</Text>
        <View>
          <Text variant="body">View all</Text>
        </View>
      </View>
      <View style={styles.ProjectImage}>
        <Image
          style={{
            height: 200,
            width: 200,
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
    marginTop: 5,
    backgroundColor: colors.light.backgroundSecondary,
    padding: 50,
  },
  ProjectImage: {
    marginRight: 10,
  },
  Description: { flexDirection: "row", justifyContent: "space-between" },
});
