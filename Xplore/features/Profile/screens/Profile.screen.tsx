import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { Icon, LinkButton, ShadowView, Text } from "../../../components";
import { LogoutButton } from "../components/Logout/LogoutButton/LogoutButton.component";
import { useThemeColor } from "../../../hooks";
import { colors } from "../../../constants";
import { Avatar } from "react-native-paper";
import { Badges } from "../components";
import { StatBoxes } from "../components";

interface ProfileProps {
  navigation: NavigationProp<any>;
}

const Profile = (props: ProfileProps) => {
  const { navigation } = props;
  const whiteBackground = useThemeColor("backgroundSecondary");
  const badgeBackground = useThemeColor("background");
  const primary = useThemeColor("primary");
  const success = useThemeColor("success");

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <ScrollView>
        <View>
          <View style={styles.ProfileIcons}>
            <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
              <View style={styles.Settings}>
                <Icon name="settings" color="primary" size="large" />
              </View>
            </TouchableOpacity>

            <View>
              <Icon
                name="bell"
                color="primary"
                size="large"
                style={styles.Bell}
              />
              <View style={styles.RedDot} />
            </View>
          </View>

          <View
            style={[styles.ProfileInfo, { backgroundColor: whiteBackground }]}
          >
            <Text variant="h2" style={{ marginTop: 40 }} color="titleText">
              Josh Lewis
            </Text>
            <Text variant="body" color="bodyText">
              <Icon name="map-pin" color="smallText" size="medium" /> Montreal,
              Quebec
            </Text>
            <Text
              variant="smBody"
              color="bodyText"
              style={{ marginTop: 5, marginBottom: 20 }}
            >
              <Icon name="zap" color="smallText" size="medium" /> 103,597 XP
            </Text>

            <View style={styles.Rec}>
              <View
                style={[
                  styles.BiggerRectangle,
                  { backgroundColor: badgeBackground, width: 330 },
                ]}
              >
                <View
                  style={[
                    styles.Rectangle,
                    {
                      width: 0.9 * 330,
                      backgroundColor: primary,
                    },
                  ]}
                ></View>
              </View>

              <View style={styles.Description}>
                <Text
                  variant="smBody"
                  color="bodyText"
                  style={{ marginTop: 5 }}
                >
                  970/1000{" "}
                  <Text variant="h4" color="bodyText">
                    XP
                  </Text>
                </Text>
                <View>
                  <Text
                    variant="body"
                    color="bodyText"
                    style={{ marginTop: 5 }}
                  >
                    <Text variant="h4" color="bodyText">
                      30 XP
                    </Text>{" "}
                    to level up
                  </Text>
                </View>
              </View>
            </View>

            <StatBoxes />
          </View>

          <View style={styles.Avatar}>
            <ShadowView
              shadowOffset={12}
              style={styles.Shadow}
              isInnerShadow={false}
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
              style={[styles.ProjectText, { backgroundColor: whiteBackground }]}
            >
              <Text variant="h3" color="titleText" style={{ marginLeft: 18 }}>
                PROJECTS
              </Text>
              <LinkButton style={{ marginRight: 18 }}>View all</LinkButton>
            </View>
            <View
              style={[styles.Projects, { backgroundColor: whiteBackground }]}
            >
              <View>
                <ScrollView horizontal={true}>
                  <Image
                    style={[styles.SideProject, { marginLeft: 25 }]}
                    source={require("../../../assets/SnakeRobot.png")}
                  />
                  <View
                    style={[
                      styles.Overlay,
                      styles.SideProject,
                      { marginLeft: 25 },
                    ]}
                  ></View>
                  <Text
                    variant="smLabel"
                    style={[
                      styles.CompletedProject,
                      { backgroundColor: success, bottom: 90, left: 50 },
                    ]}
                    darkColor={colors.dark.backgroundSecondary}
                    lightColor={colors.light.backgroundSecondary}
                  >
                    Completed
                  </Text>
                  <Text
                    variant="h3"
                    color="generalGray"
                    style={[styles.OverlayText, { bottom: 60, left: 50 }]}
                  >
                    Snake robot
                  </Text>
                  <Text
                    variant="smBody"
                    color="generalGray"
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
                    style={[
                      styles.CompletedProject,
                      { backgroundColor: success, bottom: 84, left: 335 },
                    ]}
                    darkColor={colors.dark.backgroundSecondary}
                    lightColor={colors.light.backgroundSecondary}
                  >
                    Completed
                  </Text>
                  <Text
                    variant="h3"
                    color="generalGray"
                    style={[styles.OverlayText, { bottom: 54, left: 335 }]}
                  >
                    Snake robot
                  </Text>
                  <Text
                    variant="smBody"
                    color="generalGray"
                    style={[styles.OverlayText, { bottom: 39, left: 335 }]}
                  >
                    Unique soft robot
                  </Text>

                  <Image
                    style={styles.SideProject}
                    source={require("../../../assets/SnakeRobot.png")}
                  />
                  <View
                    style={[styles.Overlay, styles.SideProject, { left: 610 }]}
                  />
                  <Text
                    variant="smLabel"
                    style={[
                      styles.CompletedProject,
                      { backgroundColor: success, bottom: 90, left: 660 },
                    ]}
                    darkColor={colors.dark.backgroundSecondary}
                    lightColor={colors.light.backgroundSecondary}
                  >
                    Completed
                  </Text>
                  <Text
                    variant="h3"
                    style={[styles.OverlayText, { bottom: 60, left: 660 }]}
                    color="generalGray"
                  >
                    Snake robot
                  </Text>
                  <Text
                    variant="smBody"
                    style={[styles.OverlayText, { bottom: 45, left: 660 }]}
                    color="generalGray"
                  >
                    Unique soft robot
                  </Text>
                </ScrollView>
                <LogoutButton style={styles.Logout}/>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
  BiggerRectangle: {
    height: 8,
    borderRadius: 100,
  },
  Rectangle: {
    height: 4,
    borderRadius: 100,
    marginTop: 2,
  },
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
  },
  Badge: {
    marginHorizontal: 20,
  },
  BadgeText: {
    marginTop: 2,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },

  Projects: {
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
    position: "absolute",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 3,
    letterSpacing: 0.2,
  },
  OverlayText: {
    position: "absolute",
  },
  ProjectText: {
    marginTop: 2,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  Logout: {
    marginBottom: 25,
    marginLeft: 176,
  },
});
