import { StepIndicator } from "../../../components";
import TechNGoals from "./TechNGoals/screens/TechNGoals.screen";
import AddMembers from "./AddMembers/screens/AddMembers.screen";
import { NavigationProp } from "@react-navigation/native";
import { AllTasks } from "./AllTasks/screens/AllTasks.screen";
import { AddLinks, Description } from "../components";
interface HeaderProps {
  navigation: NavigationProp<any>;
}

const ProjectCreation = (props: HeaderProps) => {
  return (
    <StepIndicator
      headerTitle={"Create Projects"}
      stepLabels={[
        "Description",
        "Tech & Goals",
        "All Tasks",
        "Add Members",
        "Add Links",
      ]}
      numOfSteps={5}
      screens={[
        <Description />,
        <TechNGoals />,
        <AllTasks />,
        <AddMembers />,
        <AddLinks />,
      ]}
      navigation={props.navigation}
      onSubmitMsg={"Project Created!"}
    />
  );
};

export default ProjectCreation;
