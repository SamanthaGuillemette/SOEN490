import { StepIndicator } from "../../../components";
import Description from "./Description/screens/Description.screen";
import TechNGoals from "./TechNGoals/screens/TechNGoals.screen";
import AddLinks from "./AddLinks/screens/AddLinks.screen";
import { NavigationProp } from "@react-navigation/native";
import { ScrollView } from "react-native";

interface HeaderProps {
  navigation: NavigationProp<any>;
}

const ProjectCreation = (props: HeaderProps) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <StepIndicator
        headerTitle={"Create Projects"}
        stepLabels={[
          "Description",
          "Tech & Goals",
          "Tasks",
          "Add Members",
          "Add Links",
        ]}
        numOfSteps={5}
        screens={[<Description />, <TechNGoals />, <></>, <></>, <AddLinks />]}
        navigation={props.navigation}
        onSubmitMsg={"Project Created!"}
      />
    </ScrollView>
  );
};

export default ProjectCreation;
