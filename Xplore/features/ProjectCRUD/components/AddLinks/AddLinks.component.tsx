import styles from "./AddLinks.styles";
import { IntegrationCard, View } from "../../../../components";

export const AddLinks = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerIntegration}>
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
    </View>
  );
};
