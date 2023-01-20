import { IntegrationCard, View } from "../../../../../../components";

export const Integration = () => {
  return (
    <View>
      <IntegrationCard
        testID={"ProjCreation_GitHubIntegration"}
        title={"GitHub Integration"}
        description={"Description"}
        bgColor={"white"}
        btnType={"add"}
      />
      <IntegrationCard
        testID={"ProjCreation_JiraIntegration"}
        title={"Jira Integration"}
        description={"Description"}
        bgColor={"blue"}
        btnType={"added"}
      />
      <IntegrationCard
        testID={"ProjCreation_FigmaIntegration"}
        title={"Figma Integration"}
        description={"Description"}
        bgColor={"white"}
        btnType={"add"}
      />
    </View>
  );
};
