// TODO: Need refactoring

import { useRef } from "react";
import { Animated, ScrollView, View as RNView, StyleSheet } from "react-native";
import { LinkButton, Text, View } from "../../../../components";
import { deviceScreenWidth } from "../../../../constants";
import styles from "./NewProjects.styles";

const data = ["brown", "orange", "red", "blue", "green"];

export const NewProjects = () => {
  const scrollValue = useRef(new Animated.Value(0)).current;
  const translateX = scrollValue.interpolate({
    inputRange: [0, deviceScreenWidth],
    outputRange: [0, 20],
  });

  return (
    <View backgroundColor="background" style={styles.container}>
      <Text variant="h2" color="titleText">
        Just launched
      </Text>
      <View backgroundColor="background" style={styles.subTitleContainer}>
        <Text variant="body">Fresh new ideas just arrived</Text>
        <LinkButton backgroundColor="background">View all</LinkButton>
      </View>

      <View backgroundColor="background">
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
          {data.map((x) => (
            <RNView style={[theme.card, { backgroundColor: x }]} key={x} />
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
  card: {
    width: deviceScreenWidth - 40,
    height: 200,
    borderRadius: 8,
  },
  indicatorConatiner: {
    alignSelf: "center",
    position: "relative",
    bottom: 20,
    flexDirection: "row",
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#00000044",
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
