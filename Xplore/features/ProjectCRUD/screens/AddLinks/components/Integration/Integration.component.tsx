import { IntegrationCard, View } from "../../../../../../components";
import styles from "./Integration.styles";

export const Integration = () => {
  return (
    <View style={styles.container}>
      <IntegrationCard
        testID={"ProjCreation_GitHubIntegration"}
        title={"GitHub Integration"}
        description={"Description"}
        iconName="github"
        bgColor={"white"}
        btnType={"add"}
        editableIntegration={true}
      />
      <IntegrationCard
        testID={"ProjCreation_JiraIntegration"}
        title={"Jira Integration"}
        description={"Description"}
        iconName="jira"
        bgColor={"blue"}
        btnType={"added"}
        editableIntegration={true}
      />
      <IntegrationCard
        testID={"ProjCreation_FigmaIntegration"}
        title={"Figma Integration"}
        description={"Description"}
        iconName="figma"
        bgColor={"white"}
        btnType={"add"}
        editableIntegration={true}
      />
    </View>
  );
};
