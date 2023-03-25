import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import ProjectDescription from "../../../../components/ProjectDescriptionScreen/ProjectDescription.component";
import ProjectMembers from "../../../../components/ProjectMembersScreen/ProjectMembers.component";
import Links from "../../../../components/LinksScreen/Links.component";
import Tasks from "../../../../components/ProjectTasksScreen/Tasks.component";
import { useThemeColor } from "../../../../../../hooks";
import { NavigationProp } from "@react-navigation/native";
import styles from "./ProjectNavBar.styles";

interface ProjectNavBarProps {
  navigation: NavigationProp<any>;
  route: any;
}

function ProjectNavBar(props: ProjectNavBarProps) {
  const { navigation } = props;
  const { width } = Dimensions.get("window");
  const headers = ["Description", "Tasks", "Members", "Links"];
  const projectScreenPages = [
    <ProjectDescription navigation={navigation} route={props.route} />,
    <Tasks navigation={navigation} />, // tasks
    <ProjectMembers navigation={navigation} />,
    <Links />,
  ];
  const background = useThemeColor("background");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const primary = useThemeColor("primary");
  const titleText = useThemeColor("titleText");
  const smallText = useThemeColor("smallText");

  const [active, setActive] = useState(0);
  const headerScrollView = useRef<any>(null);
  const itemScrollView = useRef<any>(null);

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
  const onMomentumScrollEnd = (e: any) => {
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
                style={[styles.headerBar, { backgroundColor: smallText }]}
              />
            </View>
          )}
        />
      </View>

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
            style={[styles.mainItem, { borderTopColor: background }]}
          >
            {projectScreenPages[index]}
          </View>
        )}
      />
    </View>
  );
}

export default ProjectNavBar;
