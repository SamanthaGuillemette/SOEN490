import {
  Animated,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { ScrollView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { Icon, Text, Avatar, LinearProgressBar } from "../../../components";
import { useThemeColor } from "../../../hooks";
import { deviceScreenWidth } from "../../../constants";
import { Badges, ProjectSlider } from "../components";
import { StatBoxes } from "../components";
import { useRef } from "react";

const headerHeight = 300;
const headerFinalHeight = 160;
const imageSize = (headerHeight / 3) * 2;

interface ProfileProps {
  navigation: NavigationProp<any>;
}

const Profile = (props: ProfileProps) => {
  const { navigation } = props;
  const whiteBackground = useThemeColor("backgroundSecondary");
  const badgeBackground = useThemeColor("background");
  const generalGray = useThemeColor("generalGray");
  const primary = useThemeColor("primary");
  const success = useThemeColor("success");
  const titleText = useThemeColor("titleText");

  // const [textWidth, setTextWidth] = useState(0);
  const scrollY = useRef(new Animated.Value(0)).current;
  const offset = headerHeight - headerFinalHeight;
  const translateHeader = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [0, -offset],
    extrapolate: "clamp",
  });
  const translateImageY = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [0, -(headerFinalHeight - headerHeight) / 2],
    extrapolate: "clamp",
  });
  const translateImageX = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [
      0,
      -(deviceScreenWidth / 2) + (imageSize * headerFinalHeight) / headerHeight,
    ],
    extrapolate: "clamp",
  });
  const scaleImage = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [1, headerFinalHeight / headerHeight],
    extrapolate: "clamp",
  });

  const translateInfoX = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [0, 60],
    extrapolate: "clamp",
  });
  const translateInfoY = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [1, -40],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: whiteBackground }]}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        {/* <View style={{ width: "100%", height: 990, backgroundColor: "pink" }} /> */}

        <View style={{ width: "100%", height: 990, backgroundColor: "pink" }}>
          {/* <View style={styles.ProfileIcons}>
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
          </View> */}

          <StatBoxes />
          <LinearProgressBar progress={0.3} />

          <Badges />

          <ProjectSlider />

          <View>
            {/* <View>
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
            </View> */}
          </View>

          {/* Spaces here */}
        </View>
      </ScrollView>

      <Animated.View
        pointerEvents="none"
        style={[
          styles.header,
          {
            transform: [{ translateY: translateHeader }],
            backgroundColor: whiteBackground,
            borderBottomColor: generalGray,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.avatar,
            {
              transform: [
                { translateY: translateImageY },
                { translateX: translateImageX },
                { scale: scaleImage },
              ],
            },
          ]}
        >
          <Avatar
            size={135}
            name="user avatar"
            imageURL="https://picsum.photos/200"
          />
        </Animated.View>

        <Animated.View
          style={[
            styles.userInfo,
            {
              transform: [
                { translateX: translateInfoX },
                { translateY: translateInfoY },
              ],
            },
          ]}
        >
          <Text variant="h2" color="titleText" style={styles.userName}>
            Josh Lewis
          </Text>
          <View style={styles.userInfoDetails}>
            <Icon
              name="map-pin"
              color="smallText"
              size="small"
              style={styles.userInfoIcon}
            />
            <Text variant="smBody">Montreal, Quebec</Text>
          </View>
          <View style={styles.userInfoDetails}>
            <Icon
              name="zap"
              color="smallText"
              size="small"
              style={styles.userInfoIcon}
            />
            <Text variant="smBody">103,597 XP</Text>
          </View>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
  scrollContainer: {
    paddingTop: headerHeight,
  },
  header: {
    height: headerHeight,
    position: "absolute",
    top: Platform.OS === "ios" ? "8%" : "3%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
  },
  avatar: {
    borderRadius: headerHeight,
    overflow: "hidden",
  },
  userInfo: {
    alignItems: "center",
    // backgroundColor: "lightblue",
  },
  userInfoIcon: {
    marginRight: 6,
  },
  userInfoDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  userName: {
    marginTop: 6,
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
  // ProfileInfo: {
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,
  //   padding: 30,
  //   backgroundColor: colors.light.backgroundSecondary,
  //   marginTop: 70,
  //   paddingTop: 40,
  // },
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

  // Projects: {
  //   paddingBottom: 50,
  //   paddingTop: 15,
  //   flexDirection: "row",
  //   justifyContent: "center",
  // },
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
});
