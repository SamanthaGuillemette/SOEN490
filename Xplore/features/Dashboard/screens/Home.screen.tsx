import React, { useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { AnimatedFAB } from "react-native-paper";
import { View } from "../../../components/";
import { useThemeColor } from "../../../hooks";
import {
  HomeHeader,
  ExploreProjects,
  TodayStats,
  NewProjects,
} from "../components";
import styles from "./Home.styles";
//imports for temporary sign out button
import { PrimaryButton } from "../../../components/";
import { useAuth } from "../../../services/authentication";
import api from "../../../services/appwrite/api";
import { COLLECTION_ID } from "@env";

const Home = () => {
  const homeBackground = useThemeColor("backgroundSecondary");
  const scrollViewBackground = useThemeColor("background");
  const [isButtonExpanded, setIsButtonExpanded] = useState(true);

  const auth = useAuth();

  const onScroll = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsButtonExpanded(currentScrollPosition <= 0);
  };

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: homeBackground }]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: scrollViewBackground }}
        onScroll={onScroll}
        scrollEventThrottle={32}
      >
        <HomeHeader />

        <View style={styles.mainScreen}>
          <TodayStats />
          <ExploreProjects />
          <NewProjects />
          {/* temporary button to teset logout functionality */}
          <PrimaryButton label="SIGN OUT" onPress={auth.signOut} />

          <PrimaryButton
            label="Create new data"
            onPress={() => {
              const data = {
                test1: "my test data 1",
                test2: "my test data 2",
              };
              api.createDocument(COLLECTION_ID, data);
            }}
          />

          <PrimaryButton
            label="Delete data"
            onPress={() => {
              api.deleteDocument(COLLECTION_ID, "638a2b72ed1d766a3441");
            }}
          />
        </View>
      </ScrollView>

      <AnimatedFAB
        icon={"plus"}
        label={"New Project"}
        extended={isButtonExpanded}
        onPress={() => console.log("Pressed")}
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
