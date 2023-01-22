import { IntegrationCard } from "../../../../components";
import { ScrollView, View } from "react-native";
import styles from "./Links.styles";

export const Links = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <IntegrationCard
        testID={"ProjCreation_GitHubIntegration"}
        title={"GitHub Integration"}
        description={"Description"}
        iconName="github"
        bgColor={"white"}
        btnType={"add"}
      />
      <IntegrationCard
        testID={"ProjCreation_JiraIntegration"}
        title={"Jira Integration"}
        description={"Description"}
        iconName="jira"
        bgColor={"blue"}
        btnType={"added"}
      />
      <IntegrationCard
        testID={"ProjCreation_FigmaIntegration"}
        title={"Figma Integration"}
        description={"Description"}
        iconName="figma"
        bgColor={"white"}
        btnType={"add"}
      />
      <View style={styles.spaceBottom} />
    </ScrollView>
  );
};

export default Links;
