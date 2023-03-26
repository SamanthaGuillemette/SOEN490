import { ScrollView } from "react-native-gesture-handler";
import { View, RequestJoin } from "../../../../components";
import Accordion from "../../../../components/Accordion/Accordion.component";
import ProjectStatusBox from "./ProjectStatusBox.Component";
import styles from "./ProjectDescription.styles";
import { useRoute } from "@react-navigation/native";

const ProjectDescription = () => {
  const route = useRoute();
  let { item }: any = route.params;
  const endDate = item.endDate.substring(0, item.endDate.indexOf("T"));

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
          {item.requestJoin ? <RequestJoin /> : <></>}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProjectDescription;
