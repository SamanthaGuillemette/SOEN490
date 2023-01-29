import { StepIndicator } from "../../../components";
import Description from "./Description/screens/Description.screen";
import TechNGoals from "./TechNGoals/screens/TechNGoals.screen";
import AddMembers from "./AddMembers/screens/AddMembers.screen";
import AddLinks from "./AddLinks/screens/AddLinks.screen";
import { AllTasks } from "./AllTasks/screens/AllTasks.screen";
import { NavigationProp } from "@react-navigation/native";

interface HeaderProps {
  navigation: NavigationProp<any>;
}

const ProjectEdit = (props: HeaderProps) => {
  const { navigation } = props;
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
