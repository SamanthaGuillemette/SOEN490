import Member from "./ProjectComponents/Member.component";
import { ScrollView } from "react-native";

interface ProjectMembers {}

const ProjectMembers = () => {
  return (
    <ScrollView>
      <Member
        avatar={"https://picsum.photos/200"}
        username={"Josh Lewis"}
        xp={"103,597"}
      />
      <Member
        avatar={"https://picsum.photos/300"}
        username={"Amy Lucas"}
        xp={"103,597"}
      />
      <Member
        avatar={"https://picsum.photos/400"}
        username={"Elva Moore"}
        xp={"103,597"}
      />
      <Member
        avatar={"https://picsum.photos/500"}
        username={"Bernice Lewis"}
        xp={"103,597"}
      />
    </ScrollView>
  );
};

export default ProjectMembers;
