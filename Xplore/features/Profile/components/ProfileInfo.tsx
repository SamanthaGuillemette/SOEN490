import { StyleSheet, View, Image } from "react-native";
import { Avatar } from "react-native-paper";
import {
  LinkButton,
  ShadowView,
  Text,
  Icon,
  ProgressBar,
} from "../../../components";
import { colors } from "../../../constants";
import { ScrollView } from "react-native";
import Badges from "./Badges";
import { useThemeColor } from "../../../hooks";

const ProfileInfo = () => {
  const whiteBackground = useThemeColor("backgroundSecondary");
  const badgeBackground = useThemeColor("background");

  return (
    <View>
      <View style={styles.ProfileIcons}>
        <View style={styles.Settings}>
          <Icon name="settings" color="primary" size="large" />
        </View>
        <View>
          <Icon
            name="bell"
            color="primary"
            size="large"
            style={styles.Bell}
          ></Icon>
          <View style={styles.RedDot}></View>
        </View>
      </View>

      <View style={[styles.ProfileInfo, { backgroundColor: whiteBackground }]}>
        <Text
          variant="h2"
          style={{ marginTop: 40 }}
          lightColor={colors.light.titleTextColor}
        >
          Josh Lewis
        </Text>
        <Text variant="body" lightColor={colors.light.bodyText}>
          <Icon name="map-pin" color="icon" size="medium" /> Montreal, Quebec
        </Text>
        <Text
          variant="smBody"
          lightColor={colors.light.bodyText}
          style={{ marginTop: 5, marginBottom: 20 }}
        >
          <Icon name="zap" color="icon" size="medium" /> 103,597 XP
        </Text>

        <View style={styles.Rec}>
          <ProgressBar
            completionPercentage={0.9}
            barColor="success"
            width={330}
          />
          <View style={styles.Description}>
            <Text
              variant="smBody"
              lightColor={colors.light.bodyText}
              style={{ marginTop: 5 }}
            >
              980/1000{" "}
              <Text variant="h4" lightColor={colors.light.bodyText}>
                XP
              </Text>
            </Text>
            <View>
              <Text
                variant="body"
                lightColor={colors.light.bodyText}
                style={{ marginTop: 5 }}
              >
                <Text variant="h4" lightColor={colors.light.bodyText}>
                  30 XP
                </Text>{" "}
                to level up
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.Boxes}>
          <View style={[styles.Box, , { backgroundColor: badgeBackground }]}>
            <Text variant="h2" lightColor={colors.light.titleTextColor}>
              5
            </Text>
            <Text variant="smBody" lightColor={colors.light.bodyText}>
              Levels
            </Text>
          </View>
          <View style={[styles.Box, , { backgroundColor: badgeBackground }]}>
            <Text variant="h2" lightColor={colors.light.titleTextColor}>
              8
            </Text>
            <Text variant="smBody" lightColor={colors.light.bodyText}>
              Badges
            </Text>
          </View>
          <View style={[styles.Box, , { backgroundColor: badgeBackground }]}>
            <Text variant="h2" lightColor={colors.light.titleTextColor}>
              12
            </Text>
            <Text variant="smBody" lightColor={colors.light.bodyText}>
              Projects
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.Avatar}>
        <ShadowView
          shadowOffset={12}
          backgroundColor={"backgroundSecondary"}
          style={styles.Shadow}
        >
          <Avatar.Image
            size={135}
            source={require("../../../assets/Josh.png")}
          />
        </ShadowView>
      </View>

      <Badges />

      <View>
        <View
          style={[styles.ProjectText, , { backgroundColor: whiteBackground }]}
        >
          <Text
            variant="h3"
            lightColor={colors.light.titleTextColor}
            style={{ marginLeft: 18 }}
          >
            PROJECTS
          </Text>
          <LinkButton style={{ marginRight: 18 }}>View all</LinkButton>
        </View>
        <View style={[styles.Projects, , { backgroundColor: whiteBackground }]}>
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
            <View
              style={[styles.Overlay, styles.MiddleProject, { left: 310 }]}
            />
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
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  ProfileInfo: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 30,
    backgroundColor: colors.light.backgroundSecondary,
    marginTop: 70,
    paddingTop: 40,
  },
  Avatar: {
    alignSelf: "center",
    position: "absolute",
    marginTop: 30,
    borderRadius: 100,
    backgroundColor: colors.light.backgroundSecondary,
    borderWidth: 2,
    borderColor: colors.light.backgroundSecondary,
  },
  ProfileIcons: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },

  Bell: {
    flexDirection: "row",
    marginRight: 29,
  },
  Boxes: {
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 10,
  },
  Box: {
    alignItems: "center",
    justifyContent: "center",
    width: 105,
    height: 70,
    backgroundColor: colors.light.background,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  Settings: {
    flexDirection: "row",
    marginLeft: 30,
  },
  Rec: {
    marginTop: 20,
  },
  Description: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  RedDot: {
    width: 9,
    height: 9,
    backgroundColor: "red",
    borderRadius: 50,
    marginLeft: 15,
    marginTop: -22,
  },
  Shadow: {
    hadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    borderRadius: 200,
  },

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
