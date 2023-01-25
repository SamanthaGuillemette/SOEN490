import Member from "./components/Member/Member.component";
import { ScrollView } from "react-native";
import { View } from "../../../../components";
import styles from "./ProjectMembers.styles";

interface ProjectMembers {}
const ProjectMembers = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
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
        </View>
      </ScrollView>
    </View>
  );
};

export default ProjectMembers;
