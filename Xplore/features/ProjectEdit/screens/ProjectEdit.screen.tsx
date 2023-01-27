import { StepIndicator } from "../../../components";
import Description from "../../ProjectCreation/screens/Description/screens/Description.screen";
import TechNGoals from "../../ProjectCreation/screens/TechNGoals/screens/TechNGoals.screen";
import Tasks from "../../ProjectCreation/screens/Tasks/screens/Tasks.screen";
import AddMembers from "../../ProjectCreation/screens/AddMembers/screens/AddMembers.screen";
import AddLinks from "../../ProjectCreation/screens/AddLinks/screens/AddLinks.screen";
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
        "Tasks",
        "Add Members",
        "Add Links",
      ]}
      numOfSteps={6}
      screens={[
        <Description />,
        <TechNGoals />,
        <AllTasks navigation={navigation} />,
        <Tasks />,
        <AddMembers />,
        <AddLinks />,
      ]}
      navigation={props.navigation}
      onSubmitMsg={"Project Edited!"}
    />
  );
};

export default ProjectEdit;
