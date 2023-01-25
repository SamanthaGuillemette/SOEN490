import {
  Animated,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native";
// import { NavigationProp } from "@react-navigation/native";
import { Icon, Text, Avatar, PrimaryButton } from "../../../components";
import { useThemeColor } from "../../../hooks";
import { deviceScreenWidth } from "../../../constants";
import { Badges, ProjectSlider, UserProgress } from "../components";
import { StatBoxes } from "../components";
import { useRef } from "react";

const headerHeight = 300;
const headerFinalHeight = 160;
const imageSize = (headerHeight / 3) * 2;

// interface ProfileProps {
//   navigation: NavigationProp<any>;
// }

const Profile = () => {
  const whiteBackground = useThemeColor("backgroundSecondary");
  const generalGray = useThemeColor("generalGray");

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
        {/* THIS IS EVERYTHING BELOW THE AVATAR & BASIC USER INFO */}
        <View
          style={{
            width: "100%",
            // height: 990,
            // backgroundColor: "pink",
            paddingBottom: 120,
            paddingTop: Platform.OS === "ios" ? 30 : 60,
          }}
        >
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

          <UserProgress />
          <StatBoxes />
          <Badges />
          <ProjectSlider />

          <View style={{ alignItems: "center", marginTop: 50 }}>
            <PrimaryButton label="Sign out" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>

      {/* ANIMATED HEADER OF USER PROFILE */}
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
        <View
          style={{
            height: 50,
            width: 400,
            // backgroundColor: "purple",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 30,
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Icon name="settings" color="primary" size="large" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Icon name="bell" color="primary" size="large" />
          </TouchableOpacity>
        </View>
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
    // borderRadius: headerHeight,
    // overflow: "hidden",
  },
  userInfo: {
    alignItems: "center",
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
  MiddleProject: {
    height: 230,
    width: 300,
    borderRadius: 7,
  },
});
