import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { useThemeColor } from "../../../../hooks";
import { NavigationProp } from "@react-navigation/native";
import { FriendsLeaderboard } from "./components/FriendsLeaderboard/FriendsLeaderboard.component";
import { LocalLeaderboard } from "./components/LocalLeaderboard/LocalLeaderboard.component";
import { GlobalLeaderboard } from "./components/GlobalLeaderboard/GlobalLeaderboard.component";
import styles from "./LeaderboardNavBar.styles";

interface LeaderboardNavBar {
  navigation: NavigationProp<any>;
}

const { width } = Dimensions.get("window");
const headers = ["FREINDS", "CANADA", "GLOBAL"];

const leaderboardScreenPages = [
  <FriendsLeaderboard />,
  <LocalLeaderboard />,
  <GlobalLeaderboard />,
];

function LeaderboardNavBar() {
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const primary = useThemeColor("primary");
  const titleText = useThemeColor("titleText");

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
    <View>
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
            <View style={[styles.headerBar, { backgroundColor: titleText }]} />
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
          <View
            key={item}
            style={[styles.mainItem, { borderColor: backgroundSecondary }]}
          >
            {leaderboardScreenPages[index]}
          </View>
        )}
      />
    </View>
  );
}

export default LeaderboardNavBar;
