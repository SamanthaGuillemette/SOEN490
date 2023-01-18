import { IntegrationLinks, View } from "../../../../../../components";

export const Integration = () => {
  return (
    <View>
      <IntegrationLinks
        testID={"ProjCreation_GitHubIntegration"}
        title={"GitHub Integration"}
        description={"Description"}
        bgColor={"white"}
        btnType={"add"}
      />
      <IntegrationLinks
        testID={"ProjCreation_GitHubIntegration"}
        title={"Jira Integration"}
        description={"Description"}
        bgColor={"blue"}
        btnType={"added"}
      />
      <IntegrationLinks
        testID={"ProjCreation_GitHubIntegration"}
        title={"Figma Integration"}
        description={"Description"}
        bgColor={"white"}
        btnType={"add"}
      />
    </View>
  );
};
