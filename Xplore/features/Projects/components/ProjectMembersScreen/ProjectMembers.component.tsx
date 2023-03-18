import { ScrollView } from "react-native";
import { MessageMember, SquaredButton, View } from "../../../../components";
import styles from "./ProjectMembers.styles";
import { NavigationProp } from "@react-navigation/native";

interface ProjectMembersProps {
  navigation: NavigationProp<any>;
}
const ProjectMembers = (props: ProjectMembersProps) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <MessageMember
            avatar={"https://picsum.photos/200"}
            username={"Josh Lewis"}
            email={"josh@gmail.com"}
            xp={103597}
            navigation={props.navigation}
          />
          <MessageMember
            avatar={"https://picsum.photos/300"}
            username={"Amy Lucas"}
            email={"amy@gmail.com"}
            xp={103597}
            navigation={props.navigation}
          />
          <MessageMember
            avatar={"https://picsum.photos/400"}
            username={"Elva Moore"}
            email={"elva@gmail.com"}
            xp={103597}
            navigation={props.navigation}
          />
          <MessageMember
            avatar={"https://picsum.photos/500"}
            username={"Bernice Lewis"}
            email={"berince@gmail.com"}
            xp={103597}
            navigation={props.navigation}
          />
          <SquaredButton iconName="plus" />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProjectMembers;
