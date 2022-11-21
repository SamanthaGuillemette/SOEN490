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
import Links from "./Links.component";
import { useThemeColor } from "../../../hooks";
import { NavigationProp } from "@react-navigation/native";

interface ProjectNavBar {
  navigation: NavigationProp<any>;
}

const { width } = Dimensions.get("window");

const headers = ["Description", "Tasks", "Discussion", "Members", "Links"];

const projectScreenPages = [
  <ProjectDescription />,
  <ProjectDescription />,
  <ProjectDescription />,
  <ProjectDescription />,
  <Links />,
];

export default function ProjectNavBar() {
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
        renderItem={({ item, index }) => (
          <View>
            <TouchableHighlight
              onPress={() => onPressHeader(index)}
              //underlayColor={tabBarBackground}
              key={item}
              style={[
                styles.headerItem,
                {
                  backgroundColor:
                    active == index ? background : backgroundSecondary,
                },
              ]}
            >
              <Text>{item}</Text>
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

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: -20,
    marginLeft: -20,
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
    height: 2,
    width: "90%",
    alignSelf: "center",
    // bottom bar color
    backgroundColor: "#eedddd",
    position: "absolute",
    bottom: 0,
  },
});
