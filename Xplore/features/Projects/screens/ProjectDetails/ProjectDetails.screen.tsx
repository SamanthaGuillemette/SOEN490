import * as React from "react";
import { SafeAreaView } from "react-native";
import { useThemeColor } from "../../../../hooks";
import ProjectCoreScreen from "../ProjectCoreScreen/ProjectCoreScreen.component";
import TopHeader from "../../../../navigation/TopHeader.component";
import { NavigationProp } from "@react-navigation/native";
import styles from "./ProjectDetails.styles";
import { TouchableOpacity } from "react-native-ui-lib";
import { useRoute } from "@react-navigation/native";

interface ProjectsProps {
  navigation: NavigationProp<any>;
}

const ProjectDetails = (props: ProjectsProps) => {
  const homeBackground = useThemeColor("backgroundSecondary");
  const route = useRoute();
  let { item }: any = route.params;

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: homeBackground }]}
    >
      <TopHeader
        screenName={"Projects"}
        navigation={props.navigation}
        name="edit"
        projectInfo={item}
      />
      <TouchableOpacity
        onPress={() => props.navigation.navigate("ProfileEdit")}
      />
      <ProjectCoreScreen navigation={props.navigation} />
    </SafeAreaView>
  );
};

export default ProjectDetails;
