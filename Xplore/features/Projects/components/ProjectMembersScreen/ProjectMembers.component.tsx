import { ScrollView } from "react-native";
import { MessageMember, View } from "../../../../components";
import styles from "./ProjectMembers.styles";
import { NavigationProp } from "@react-navigation/native";
import { useAllMembersInfo } from "../../../../services/api/projects";

interface ProjectMembersProps {
  navigation: NavigationProp<any>;
  route: any;
}
const ProjectMembers = (props: ProjectMembersProps) => {
  const item = props.route.params.item;
  const { navigation } = props;
  const allMembers = useAllMembersInfo(item.members);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {allMembers.map((singleMember) => (
            <MessageMember
              id={singleMember.userID}
              avatar={singleMember.profilePicture}
              username={singleMember.username}
              xp={singleMember.xp}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProjectMembers;
