import { StepIndicator } from "../../../components";
import { NavigationProp } from "@react-navigation/native";
import {
  AddLinks,
  AddMembers,
  AllTasks,
  Description,
  CategoryNGoals,
} from "../components";
import { useState } from "react";
interface ProjectCreationProps {
  navigation: NavigationProp<any>;
}

const ProjectCreation = (props: ProjectCreationProps) => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  const [allMembers, setAllMembers] = useState([]);
  const [allLinks, setAllLinks] = useState([]);
  const [projName, setProjectName] = useState("");
  const [projectGoals, setGoals] = useState<string[]>([]);

  return (
    <StepIndicator
      headerTitle={"Create Projects"}
      stepLabels={[
        "Description",
        "Category & Goals",
        "All Tasks",
        "Add Members",
        "Add Links",
      ]}
      numOfSteps={5}
      screens={[
        <Description
          setProjectName={setProjectName}
          setDescription={setDescription}
        />,
        <CategoryNGoals setCategory={setCategory} setGoals={setGoals} />,
        <AllTasks navigation={props.navigation} />,
        <AddMembers />,
        <AddLinks />,
      ]}
      navigation={props.navigation}
      onSubmitMsg={"Project Created!"}
    />
  );
};

export default ProjectCreation;
