import { SafeAreaView } from "react-native";
import { useThemeColor } from "../../../hooks";
import TopHeader from "../../../navigation/TopHeader.component";
import styles from "./Projects.styles";
import { SegmentedButton, Text } from "../../../components";
import { useState } from "react";
import { NavigationProp } from "@react-navigation/native";

interface ProjectsProps {
  navigation: NavigationProp<any>;
}

const Home = (props: ProjectsProps) => {
  const { navigation } = props;
  const homeBackground = useThemeColor("backgroundSecondary");
  const [screen, setScreen] = useState(0);

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: homeBackground }]}
    >
      <TopHeader screenName={"Projects"} navigation={navigation} />
      <SegmentedButton labels={["CURRENT", "COMPLETED"]} setIndex={setScreen} />
      {screen === 0 && (
        <Text
          variant="h3"
          color="titleText"
          lineBreakMode="tail"
          numberOfLines={1}
        >
          CURRENT USER PROJECTS
        </Text>
      )}
      {screen === 1 && (
        <Text
          variant="h3"
          color="titleText"
          lineBreakMode="tail"
          numberOfLines={1}
        >
          COMPLETED USER PROJECTS
        </Text>
      )}
    </SafeAreaView>
  );
};

export default Home;
