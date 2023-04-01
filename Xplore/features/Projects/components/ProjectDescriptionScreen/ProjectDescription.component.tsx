import { ScrollView } from "react-native-gesture-handler";
import { View, RequestJoin } from "../../../../components";
import Accordion from "../../../../components/Accordion/Accordion.component";
import ProjectStatusBox from "./ProjectStatusBox.Component";
import styles from "./ProjectDescription.styles";
import { useRoute } from "@react-navigation/native";
import api from "../../../../services/appwrite/api";
import { useQuery } from "react-query";

const ProjectDescription = () => {
  const route = useRoute();
  let { item }: any = route.params;
  const endDate = item.endDate.substring(0, item.endDate.indexOf("T"));

  // Quering current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ProjectStatusBox
            tasks={item.tasks.length}
            date={endDate}
            percent={item.percentComplete}
          />
          <Accordion item={item} />
          {item.requestJoin ? (
            <RequestJoin
              projectOwnerID={item.projectOwner}
              userID={userId}
              projectID={item.$id}
              projectName={item.name}
            />
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProjectDescription;
