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

interface ProjectEditProps {
  navigation: NavigationProp<any>;
}

const ProjectEdit = (props: ProjectEditProps) => {
  const [description, setDescription] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  const [allMembers, setAllMembers] = useState([]);
  const [allLinks, setAllLinks] = useState([]);
  const [projName, setProjectName] = useState("");
  const [projectGoals, setProjectGoals] = useState("");
  const [projectCategory, setCategory] = useState("");
  return (
    <StepIndicator
      headerTitle={"Edit Projects"}
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
        <CategoryNGoals setCategory={setCategory} />,
        <AllTasks navigation={props.navigation} />,
        <AddMembers />,
        <AddLinks />,
      ]}
      navigation={props.navigation}
      onSubmitMsg={"Project Updated!"}
    />
  );
};

export default ProjectEdit;
