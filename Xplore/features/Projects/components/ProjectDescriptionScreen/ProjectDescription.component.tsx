import { ScrollView } from "react-native-gesture-handler";
import { View, RequestJoin } from "../../../../components";
import Accordion from "../../../../components/Accordion/Accordion.component";
import { NavigationProp } from "@react-navigation/native";
import ProjectStatusBox from "./components/ProjectStatusBox/ProjectStatusBox.Component";
import styles from "./ProjectDescription.styles";

interface ProjectDescription {
  navigation: NavigationProp<any>;
}

const ProjectDescription = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ProjectStatusBox
            tasks={"13"}
            conversations={"20"}
            date={"August 12, 2022"}
            percent={63}
          />
          <Accordion />
          <RequestJoin />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProjectDescription;
