import { NavigationProp } from "@react-navigation/native";
import { useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { AnimatedFAB } from "react-native-paper";
import { View } from "../../../../components";
import { useThemeColor } from "../../../../hooks";
import {
  HomeHeader,
  ExploreProjects,
  TodayStats,
  NewProjects,
} from "../../components";
import styles from "./Home.styles";

interface HomeProps {
  navigation: NavigationProp<any>;
}

const Home = (props: HomeProps) => {
  const homeBackground = useThemeColor("backgroundSecondary");
  const scrollViewBackground = useThemeColor("background");
  const [isButtonExpanded, setIsButtonExpanded] = useState(true);
  const { navigation } = props;

  const onScroll = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsButtonExpanded(currentScrollPosition <= 0);
  };
  //deleteAllDocuments(COLLECTION_ID_USERS);
  //seedUsersFromAuth();

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: homeBackground }]}
    >
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: scrollViewBackground }}
        onScroll={onScroll}
        scrollEventThrottle={32}
      >
        <HomeHeader navigation={navigation} />
        <View style={styles.mainScreen}>
          <TodayStats />
          <ExploreProjects navigation={navigation} />
          <NewProjects navigation={navigation} />
        </View>
      </ScrollView>

      {/* FIXME: Gonna make some changes to this floating button later */}
      <AnimatedFAB
        icon={"plus"}
        label={"New Project"}
        extended={isButtonExpanded}
        onPress={() => navigation.navigate("ProjectCreation")}
        visible={true}
        animateFrom={"right"}
        iconMode={"dynamic"}
        style={{
          position: "absolute",
          bottom: Platform.OS === "ios" ? "15%" : "12%",
          right: 16,
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
