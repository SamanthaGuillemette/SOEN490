import { ScrollView } from "react-native-gesture-handler";
import { View, RequestJoin } from "../../../../components";
import Accordion from "../../../../components/Accordion/Accordion.component";
import ProjectStatusBox from "./ProjectStatusBox.Component";
import styles from "./ProjectDescription.styles";

interface ProjectDescriptionProps {
  /*task: number;
  conv: string;
  sDate: string;
  percentComplete: number;*/
}

const ProjectDescription = (props: ProjectDescriptionProps) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ProjectStatusBox
            tasks={""}
            conversations={""}
            date={"sDate"}
            percent={10}
          />
          <Accordion />
          <RequestJoin />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProjectDescription;
