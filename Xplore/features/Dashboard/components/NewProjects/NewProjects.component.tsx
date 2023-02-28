// TODO: Need refactoring

import { NavigationProp } from "@react-navigation/native";
import { useRef } from "react";
import { Animated, ScrollView, View as RNView, StyleSheet } from "react-native";
import { LinkButton, Text, View } from "../../../../components";
import { deviceScreenWidth } from "../../../../constants";
import { ProjectCardLarge } from "../ProjectCardLarge/ProjectCardLarge.component";
import styles from "./NewProjects.styles";
import { useNewProjects } from "../../../../services/api/projects";

// const data = ["brown", "orange", "red", "blue", "green"];


interface NewProjectsProps {
  navigation: NavigationProp<any>;
}

export const NewProjects = (props: NewProjectsProps) => {
  const { navigation } = props;
  const scrollValue = useRef(new Animated.Value(0)).current;
  const translateX = scrollValue.interpolate({
    inputRange: [0, deviceScreenWidth - 40],
    outputRange: [0, 18],
  });

  const { data } = useNewProjects();

  return (
    <View style={styles.container}>
      <Text variant="h2" color="titleText">
        Just launched
      </Text>
      <View style={styles.subTitleContainer}>
        <Text variant="body">Fresh new ideas just arrived</Text>
        <LinkButton
          onPress={() => {
            navigation.navigate("AllProjects");
          }}
        >
          View all
        </LinkButton>
      </View>

      <View style={styles.projectSlideContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollValue } } }],
            { useNativeDriver: false }
          )}
        >
          {data?.documents.map((project) => (
            <ProjectCardLarge
              projectName={project.name}
              goal={project.description.str.split(" ").slice(0, 5).join(" ")}
              duration={100}
              members={8}
              imageURL="https://picsum.photos/300/200"
              key={projectDetail}
            />
          ))}
        </ScrollView>

        <RNView style={theme.indicatorConatiner} pointerEvents="none">
          {data.map((x) => (
            <Indicator key={x} />
          ))}
          <Animated.View
            style={[
              theme.activeIndicator,
              { position: "absolute", transform: [{ translateX }] },
            ]}
          />
        </RNView>
      </View>
    </View>
  );
};

function Indicator() {
  return <RNView style={theme.indicator} />;
}

const theme = StyleSheet.create({
  indicatorConatiner: {
    alignSelf: "center",
    position: "relative",
    bottom: 25,
    flexDirection: "row",
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,0.5)",
    marginHorizontal: 5,
  },
  activeIndicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginHorizontal: 5,
  },
});
