import { ScrollView } from "react-native-gesture-handler";
import { View, IntegrationCard } from "../../../../components";
import styles from "./Links.styles";

export const Links = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <IntegrationCard
          testID={"Proj_GitHubIntegration"}
          title={"GitHub Integration"}
          description={"Description"}
          bgColor={"white"}
          btnType={"add"}
        />
        <IntegrationCard
          testID={"Proj_JiraIntegration"}
          title={"Jira Integration"}
          description={"Description"}
          bgColor={"blue"}
          btnType={"added"}
        />
        <IntegrationCard
          testID={"Proj_FigmaIntegration"}
          title={"Figma Integration"}
          description={"Description"}
          bgColor={"white"}
          btnType={"add"}
        />
      </ScrollView>
    </View>
  );
};

export default Links;
