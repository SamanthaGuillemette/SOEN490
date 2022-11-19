import { ScrollView } from "react-native";
import ProjectDropDown from "./DropDown.component";
import ProjectStats from "./ProjectStats.component";

const ProjectDescription = () => {
  return (
    <ScrollView>
      <ProjectStats />
      <ProjectDropDown />
    </ScrollView>
  );
};

export default ProjectDescription;
