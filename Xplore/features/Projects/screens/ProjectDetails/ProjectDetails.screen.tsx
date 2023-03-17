import * as React from "react";
import { SafeAreaView } from "react-native";
import { useThemeColor } from "../../../../hooks";
import ProjectCoreScreen from "../ProjectCoreScreen/ProjectCoreScreen.component";
import TopHeader from "../../../../navigation/TopHeader.component";
import { NavigationProp } from "@react-navigation/native";
import styles from "./ProjectDetails.styles";
import { TouchableOpacity } from "react-native-ui-lib";

interface ProjectsProps {
  navigation: NavigationProp<any>;
}

const ProjectDetails = (props: ProjectsProps) => {
  const homeBackground = useThemeColor("backgroundSecondary");

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: homeBackground }]}
    >
      <TopHeader
        screenName={"Projects"}
        navigation={props.navigation}
        name="edit"
      />
      <TouchableOpacity
        onPress={() => props.navigation.navigate("ProfileEdit")}
      />
      <ProjectCoreScreen navigation={props.navigation} />
    </SafeAreaView>
  );
};

export default ProjectDetails;
