import React, { Fragment, useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { AnimatedFAB } from "react-native-paper";
import { Text, View } from "../../../components/";
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
import api from "../../../services/appwrite/api";
import { COLLECTION_ID_TEST } from "@env";
import { useMutation, useQuery, useQueryClient } from "react-query";

const Home = () => {
  const homeBackground = useThemeColor("backgroundSecondary");
  const scrollViewBackground = useThemeColor("background");
  const [isButtonExpanded, setIsButtonExpanded] = useState(true);

  // FIXME: DELTE THIS PART LATER
  const { isLoading, data } = useQuery("test data", () =>
    api.listDocuments(COLLECTION_ID_TEST)
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newData: Omit<Document, keyof Document>) =>
      api.createDocument(COLLECTION_ID_TEST, newData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("test data");
      },
    }
  );

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

          <PrimaryButton
            label="Create new data"
            onPress={() => {
              const newData = {
                test1: "new data 1",
                test2: "new data 2",
              };
              mutation.mutate(newData);
            }}
          />

          <View>
            {data?.documents?.map((doc: any, index: number) => (
              <Fragment key={index}>
                <Text>{isLoading && "Loading........."}</Text>
                <Text>{doc.test1}</Text>
                <Text>{doc.test2}</Text>
              </Fragment>
            ))}
          </View>
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
