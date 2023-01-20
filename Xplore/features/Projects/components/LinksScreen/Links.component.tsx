import { View, IntegrationCard } from "../../../../components";

export const Links = () => {
  return (
    <View>
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
    </View>
  );
};

export default Links;
