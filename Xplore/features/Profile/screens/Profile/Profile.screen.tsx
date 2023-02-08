import { Animated, SafeAreaView, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { Icon, Text, Avatar } from "../../../../components";
import { useAuth, useThemeColor } from "../../../../hooks";
import { deviceScreenWidth } from "../../../../constants";
import { Badges, ProjectSlider, UserProgress } from "../../components";
import { StatBoxes } from "../../components";
import { LogoutButton } from "../../components/Logout/LogoutButton/LogoutButton.component";
import { useRef } from "react";
import styles from "./Profile.styles";
import { useQuery } from "react-query";
import api from "../../../../services/appwrite/api";

const headerHeight = 300;
const headerFinalHeight = 160;
const imageSize = (headerHeight / 3) * 2;

interface ProfileProps {
  navigation: NavigationProp<any>;
}

const Profile = (props: ProfileProps) => {
  const { navigation } = props;
  const { signOut } = useAuth();
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

  // Get user data from DB, renamed 'data' to 'userdata' to avoid confusion
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  const { data: userPrefs } = useQuery("user prefs", () =>
    api.getUserPreferences()
  );

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: whiteBackground }]}
    >
      <ScrollView
        contentContainerStyle={{ paddingTop: headerHeight }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        {/* THIS IS EVERYTHING BELOW THE ANIMATED HEADER */}
        <View style={styles.belowHeaderContainer}>
          <UserProgress />
          <StatBoxes />
          <Badges />
          <ProjectSlider />
          <View style={styles.logoutButton}>
            <LogoutButton />
          </View>
        </View>
      </ScrollView>

      {/* ANIMATED HEADER OF USER PROFILE */}
      <Animated.View
        // pointerEvents="none"
        style={[
          styles.header,
          {
            transform: [{ translateY: translateHeader }],
            backgroundColor: whiteBackground,
            borderBottomColor: generalGray,
            height: headerHeight,
          },
        ]}
      >
        <View style={styles.topHeaderButtons}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Settings");
            }}
          >
            <Icon name="settings" color="primary" size="large" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Notification");
            }}
          >
            <Icon name="bell" color="primary" size="large" />
          </TouchableOpacity>
        </View>

        <Animated.View
          style={[
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
            {userdata?.name}
          </Text>
          <View style={styles.userInfoDetails}>
            <Icon
              name="map-pin"
              color="smallText"
              size="small"
              style={styles.userInfoIcon}
            />
            <Text variant="smBody">{userPrefs?.from}</Text>
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
