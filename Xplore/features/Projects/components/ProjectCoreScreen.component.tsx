import { View } from "../../../components";
//import ProjectDropDown from "./DropDown.component";
import ProjectTitle from "./ProjectTitle.component";
import ProjectNavBar from "./ProjectNavBar.component";
import { NavigationProp } from "@react-navigation/native";
import { useState } from "react";

interface ProjectCoreProps {
  navigation: NavigationProp<any>;
}

const ProjectCore = (props: ProjectCoreProps) => {
  const { navigation } = props;
  const [screen, setScreen] = useState(0);
  return (
    <View backgroundColor="background">
      <ProjectTitle />
      <View backgroundColor="background">
        <ProjectNavBar />
      </View>
    </View>
  );
};

export default ProjectCore;
