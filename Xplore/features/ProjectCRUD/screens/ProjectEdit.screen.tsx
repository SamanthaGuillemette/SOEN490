import { StepIndicator } from "../../../components";
import AddMembers from "./AddMembers/screens/AddMembers.screen";
import { AllTasks } from "./AllTasks/screens/AllTasks.screen";
import { NavigationProp } from "@react-navigation/native";
import { AddLinks, Description, TechNGoals } from "../components";

interface HeaderProps {
  navigation: NavigationProp<any>;
}

const ProjectEdit = (props: HeaderProps) => {
  return (
    <StepIndicator
      headerTitle={"Edit Projects"}
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
      onSubmitMsg={"Project Updated!"}
    />
  );
};

export default ProjectEdit;
