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
  const [tasks, setTasks] = useState<Object[]>([]);
  const [allTasks, setAllTasks] = useState([]);
  const [allMembers, setAllMembers] = useState([]);
  const [allLinks, setAllLinks] = useState([]);
  const [projName, setProjectName] = useState("");
  const [projectGoals, setGoals] = useState<string[]>([]);
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
        <CategoryNGoals setCategory={setCategory} setGoals={setGoals} />,
        <AllTasks
          navigation={props.navigation}
          setTasks={setTasks}
          tasks={tasks}
        />,
        <AddMembers />,
        <AddLinks />,
      ]}
      navigation={props.navigation}
      onSubmitMsg={"Project Updated!"}
    />
  );
};

export default ProjectEdit;
