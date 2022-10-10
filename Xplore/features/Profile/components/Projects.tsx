import { StyleSheet, View, Image } from "react-native";
import { Avatar } from "react-native-paper";
import { Text } from "../../../components";

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
            height: 100,
            width: 100,
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

    backgroundColor: "white",
    padding: 50,
  },
  ProjectImage: {
    marginRight: 10,
  },
  Description: { flexDirection: "row", justifyContent: "space-between" },
});
