import { ScrollView } from "react-native-gesture-handler";
import { View, RequestJoin } from "../../../../components";
import Accordion from "../../../../components/Accordion/Accordion.component";
import ProjectStatusBox from "./ProjectStatusBox.Component";
import { NavigationProp } from "@react-navigation/native";
import styles from "./ProjectDescription.styles";

interface ProjectDescriptionProps {
  navigation: NavigationProp<any>;
  route: any;
}

const ProjectDescription = (props: ProjectDescriptionProps) => {
  const item = props.route.params.item;
  const endDate = item.endDate.substring(0, item.endDate.indexOf("T"));

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ProjectStatusBox
            tasks={item.tasks.toString()}
            conversations={item.conversation.toString()}
            date={endDate}
            percent={item.percentComplete}
          />
          <Accordion item={item} />
          <RequestJoin />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProjectDescription;
