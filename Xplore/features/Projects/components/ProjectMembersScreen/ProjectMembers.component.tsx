import MessageMember from "../../../../components/MessageMember/MessageMember.component";
import { ScrollView } from "react-native";
import { SquaredButton, View } from "../../../../components";
import styles from "./ProjectMembers.styles";

interface ProjectMembers {}
const ProjectMembers = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <MessageMember
            avatar={"https://picsum.photos/200"}
            username={"Josh Lewis"}
            xp={103597}
          />
          <MessageMember
            avatar={"https://picsum.photos/300"}
            username={"Amy Lucas"}
            xp={103597}
          />
          <MessageMember
            avatar={"https://picsum.photos/400"}
            username={"Elva Moore"}
            xp={103597}
          />
          <MessageMember
            avatar={"https://picsum.photos/500"}
            username={"Bernice Lewis"}
            xp={103597}
          />
          <SquaredButton iconName="plus" />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProjectMembers;
