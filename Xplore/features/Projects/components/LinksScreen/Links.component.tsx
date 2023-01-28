import { IntegrationCard } from "../../../../components";
import { ScrollView, View } from "react-native";
import styles from "./Links.styles";

export const Links = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <IntegrationCard
            testID={"ProjCreation_GitHubIntegration"}
            title={"GitHub Integration"}
            description={"Description"}
            iconName="github"
            bgColor={"white"}
            btnType={"added"}
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
            btnType={"added"}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Links;
