import { StyleSheet, View, Image } from "react-native";
import { LinkButton, Text } from "../../../components";
import { colors } from "../../../constants";
import { ScrollView } from "react-native";

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
        <LinkButton style={{ marginRight: 18 }}>View all</LinkButton>
      </View>
      <View style={styles.Projects}>
        <ScrollView horizontal={true}>
          <Image
            style={[styles.SideProject, { marginLeft: 25 }]}
            source={require("../../../assets/SnakeRobot.png")}
          />
          <View
            style={[styles.Overlay, styles.SideProject, { marginLeft: 25 }]}
          ></View>
          <Text
            variant="smLabel"
            style={[styles.CompletedProject, { bottom: 90, left: 50 }]}
          >
            Completed
          </Text>
          <Text
            variant="h3"
            style={[styles.OverlayText, { bottom: 60, left: 50 }]}
          >
            Snake robot
          </Text>
          <Text
            variant="smBody"
            style={[styles.OverlayText, { bottom: 45, left: 50 }]}
          >
            Unique soft robot
          </Text>

          <Image
            style={styles.MiddleProject}
            source={require("../../../assets/SnakeRobot.png")}
          />
          <View style={[styles.Overlay, styles.MiddleProject, { left: 310 }]} />
          <Text
            variant="smLabel"
            style={[styles.CompletedProject, { bottom: 84, left: 335 }]}
          >
            Completed
          </Text>
          <Text
            variant="h3"
            style={[styles.OverlayText, { bottom: 54, left: 335 }]}
          >
            Snake robot
          </Text>
          <Text
            variant="smBody"
            style={[styles.OverlayText, { bottom: 39, left: 335 }]}
          >
            Unique soft robot
          </Text>

          <Image
            style={styles.SideProject}
            source={require("../../../assets/SnakeRobot.png")}
          />
          <View style={[styles.Overlay, styles.SideProject, { left: 610 }]} />
          <Text
            variant="smLabel"
            style={[styles.CompletedProject, { bottom: 90, left: 660 }]}
          >
            Completed
          </Text>
          <Text
            variant="h3"
            style={[styles.OverlayText, { bottom: 60, left: 660 }]}
          >
            Snake robot
          </Text>
          <Text
            variant="smBody"
            style={[styles.OverlayText, { bottom: 45, left: 660 }]}
          >
            Unique soft robot
          </Text>
        </ScrollView>
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
  MiddleProject: {
    height: 230,
    width: 300,
    borderRadius: 7,
  },
  SideProject: {
    height: 200,
    width: 270,
    borderRadius: 7,
    marginVertical: 15,
    marginHorizontal: 15,
  },
  Overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
  },
  CompletedProject: {
    color: colors.light.backgroundSecondary,
    position: "absolute",
    backgroundColor: colors.light.success,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 3,
    letterSpacing: 0.2,
  },
  OverlayText: {
    color: colors.light.backgroundSecondary,
    position: "absolute",
  },
  ProjectText: {
    marginTop: 2,
    flexDirection: "row",
    backgroundColor: colors.light.backgroundSecondary,
    padding: 10,
    justifyContent: "space-between",
  },
});
