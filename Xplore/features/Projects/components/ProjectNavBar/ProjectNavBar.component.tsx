import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import ProjectDescription from "../ProjectDescription/ProjectDescription.component";
import ProjectMembers from "../ProjectMembers/ProjectMembers.component";
import Links from "../Links/Links.component";
import Tasks from "../Tasks/Tasks.component";
import { useThemeColor } from "../../../../hooks";
import { NavigationProp } from "@react-navigation/native";
import styles from "./ProjectNavBar.styles";
import { ScrollView } from "react-native-gesture-handler";
import { getBackgroundColor } from "react-native-ui-lib/src/helpers/AvatarHelper";

interface ProjectNavBar {
  navigation: NavigationProp<any>;
}

const { width } = Dimensions.get("window");
const headers = ["Description", "Tasks", "Discussion", "Members", "Links"];

const projectScreenPages = [
  <ProjectDescription />,
  <Tasks />, // tasks
  <ProjectDescription />, // discussion placeholder
  <ProjectMembers />,
  <Links />,
];

function ProjectNavBar() {
  const background = useThemeColor("background");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const primary = useThemeColor("primary");
  const titleText = useThemeColor("titleText");
  const generalGray = useThemeColor("generalGray");

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
    if (active !== newIndex) {
      setActive(newIndex);
    }
  };
  return (
    <View style={[styles.container]}>
      <View
        style={[styles.headerScroll, { backgroundColor: backgroundSecondary }]}
      >
        <FlatList
          data={headers}
          ref={headerScrollView}
          keyExtractor={(item) => item}
          horizontal
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
                    backgroundColor: backgroundSecondary,
                  },
                ]}
              >
                <Text
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    color: active === index ? primary : titleText,
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </Text>
              </TouchableHighlight>
              {active === index && (
                <View
                  style={[styles.headerActiveBar, { backgroundColor: primary }]}
                />
              )}
              <View
                style={[styles.headerBar, { backgroundColor: generalGray }]}
              />
            </View>
          )}
        />
      </View>
      <ScrollView
        style={[styles.mainItem_scrollView, { backgroundColor: background }]}
      >
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
            <View
              key={item}
              style={[styles.mainItem, { borderColor: background }]}
            >
              {projectScreenPages[index]}
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}

export default ProjectNavBar;
