import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import ProjectDescription from "./ProjectDescription.component";
import ProjectMembers from "./ProjectMembers.component";
import ProjectDiscussion from "./ProjectComponents/Discussion.component";
import Links from "../components/Links/Links.component";
import Tasks from "../components/Tasks/Tasks.component";
import { useThemeColor } from "../../../hooks";
import { NavigationProp } from "@react-navigation/native";

interface ProjectNavBar {
  navigation: NavigationProp<any>;
}

const { width } = Dimensions.get("window");

const headers = ["Description", "Tasks", "Discussion", "Members", "Links"];

const projectScreenPages = [
  <ProjectDescription />,
  <Tasks />, // tasks
  <ProjectDiscussion />, // discussion
  <ProjectMembers />,
  <Links />,
];

function ProjectNavBar() {
  const background = useThemeColor("background");
  const backgroundSecondary = useThemeColor("backgroundSecondary");

  const [active, setActive] = useState(0);
  const headerScrollView = useRef();
  const itemScrollView = useRef();
  useEffect(() => {
    headerScrollView.current.scrollToIndex({
      index: active,
      viewPosition: 0.5,
    });
  }, [active]);
  const onPressHeader = (index: React.SetStateAction<number>) => {
    itemScrollView.current.scrollToIndex({ index });
    setActive(index);
  };
  const onMomentumScrollEnd = (e) => {
    const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
    if (active != newIndex) {
      setActive(newIndex);
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={headers}
        ref={headerScrollView}
        keyExtractor={(item) => item}
        horizontal
        style={styles.headerScroll}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        renderItem={({ item, index }) => (
          <View>
            <TouchableHighlight
              onPress={() => onPressHeader(index)}
              underlayColor={""}
              key={item}
              style={[
                styles.headerItem,
                {
                  backgroundColor:
                    active == index ? background : backgroundSecondary,
                },
              ]}
            >
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  color: active == index ? "#024089" : "#000000",
                  fontWeight: "bold",
                }}
              >
                {item}
              </Text>
            </TouchableHighlight>
            {active == index && <View style={styles.headerBar} />}
          </View>
        )}
      />
      <FlatList
        data={headers}
        ref={itemScrollView}
        keyExtractor={(item) => item}
        horizontal
        pagingEnabled
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onMomentumScrollEnd}
        renderItem={({ item, index }) => (
          <View key={item} style={styles.mainItem}>
            {projectScreenPages[index]}
          </View>
        )}
      />
    </View>
  );
}

export default ProjectNavBar;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: -220,
    width: width,
  },
  headerScroll: {
    flexGrow: 0,
    color: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  headerItem: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  mainItem: {
    width: width,
    borderWidth: 5,
    borderColor: "#0000",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  headerBar: {
    height: 4,
    width: "90%",
    alignSelf: "center",
    // bottom bar color
    backgroundColor: "#024089",
    position: "absolute",
    bottom: 0,
  },
  /*headerText: {
    color: "#024089",
    fontWeight: "bold",
  },*/
});
