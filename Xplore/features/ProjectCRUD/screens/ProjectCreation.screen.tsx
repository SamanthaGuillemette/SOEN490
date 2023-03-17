import { StepIndicator } from "../../../components";
import { NavigationProp } from "@react-navigation/native";
import { useState } from "react";
import {
  AddLinks,
  AddMembers,
  AllTasks,
  Description,
  TechNGoals,
} from "../components";
interface HeaderProps {
  navigation: NavigationProp<any>;
}

const ProjectCreation = (props: HeaderProps) => {
  const [description, setDescription] = useState("");
  const [tech, setTech] = useState([]);
  const [allTasks, setAllTasks] = useState([]);
  const [allMembers, setAllMembers] = useState([]);
  const [allLinks, setAllLinks] = useState([]);
  const [projName, setProjectName] = useState("");
  const [projectGoals, setProjectGoals] = useState("");
  const [Technologies, setTechnologies] = useState("");
  const [projectCategory, setProjectCategory] = useState("");

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
        <Description
          setDescription={setDescription}
          setProjectName={setProjectName}
        />,
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
