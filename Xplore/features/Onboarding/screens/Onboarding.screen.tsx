import React, { FunctionComponent, useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View,
} from "react-native";

const images: string[] = [
  "https://img.freepik.com/premium-vector/business-project-process-start-up-idea-launching-project-management-start-up-launch-teamwork_566886-1849.jpg?w=2000",
  "https://vectorforfree.com/wp-content/uploads/2020/02/Project_Teamwork_VectorForFree.png",
  "https://static.vecteezy.com/system/resources/previews/005/283/048/original/teamwork-concept-in-3d-isometric-design-colleagues-work-together-on-project-team-building-and-collaboration-business-development-web-template-with-people-scene-illustration-for-webpage-vector.jpg",
];

const { width } = Dimensions.get("screen");

const OnboardingPage: FunctionComponent = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  return (
    <View style={style.container}>
      <View style={style.topContainer}>
        <Animated.FlatList
          data={images}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: animatedValue } } }],
            { useNativeDriver: false }
          )}
          pagingEnabled={true}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <View style={style.imageContainer}>
                <Image style={style.image} source={{ uri: item }} />
              </View>
            );
          }}
        />
      </View>
      <View style={style.bottomContainer}>
        <FlatList
          horizontal
          data={images}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ index }) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];
            const colorRange = ["#000", "grey", "#000"];
            const scaleRange = [1, 2, 1];
            const dotScale = animatedValue.interpolate({
              inputRange,
              outputRange: scaleRange,
              extrapolate: "clamp",
            });
            const color = animatedValue.interpolate({
              inputRange,
              outputRange: colorRange,
              extrapolate: "clamp",
            });
            return (
              <View style={style.dotContainer}>
                <PagingDot color={color} scale={dotScale} />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const PagingDot: FunctionComponent<{ scale: any; color: any }> = ({
  scale,
  color,
}) => {
  return (
    <Animated.View
      style={[
        style.pagingDot,
        { backgroundColor: color, transform: [{ scale }] },
      ]}
    />
  );
};

const style = StyleSheet.create({
  container: {
    flex: 3,
  },
  topContainer: {
    flex: 2,
  },
  bottomContainer: {
    flex: 1,
    width,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "flex-end",
    paddingBottom: 50,
    alignItems: "center",
    width,
  },
  image: {
    width: width - 80,
    height: 300,
    borderRadius: 40,
  },
  pagingDot: {
    width: 10,
    height: 10,
    backgroundColor: "grey",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "grey",
  },
  dotContainer: {
    width: 30,
    padding: 10,
  },
});

export default OnboardingPage;
