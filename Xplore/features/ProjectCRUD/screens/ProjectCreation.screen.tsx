import { StepIndicator } from "../../../components";
import { NavigationProp } from "@react-navigation/native";
import {
  AddLinks,
  AddMembers,
  AllTasks,
  Description,
  CategoryNGoals,
  BuildProject,
} from "../components";
import { useState } from "react";
import { useCreateProject } from "../../../services/api/projects";
interface ProjectCreationProps {
  navigation: NavigationProp<any>;
}

const ProjectCreation = (props: ProjectCreationProps) => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tasks, setTasks] = useState<Object[]>([]);
  const [allMembers, setAllMembers] = useState<any[]>([]);
  const [allLinks, setAllLinks] = useState([]);
  const [projName, setProjectName] = useState("");
  const [projectGoals, setGoals] = useState<string[]>([]);
  const [buildProject, setBuildProject] = useState(false);
  const { mutateAsync, isLoading } = useCreateProject();

  if (buildProject) {
    mutateAsync({
      name: projName,
      description: description,
      category: category,
      tasks: tasks,
      startDate,
      endDate,
      goals: projectGoals,
      members: allMembers,
    });
  }

  console.log(allMembers);

  return (
    <StepIndicator
      setBuildProject={setBuildProject}
      headerTitle={"Create Projects"}
      stepLabels={[
        "Description",
        "Category & Goals",
        "All Tasks",
        "Add Members",
      ]}
      numOfSteps={4}
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
        <AddMembers setAllMembers={setAllMembers} allMembers={allMembers} />,
      ]}
      navigation={props.navigation}
      onSubmitMsg={"Project Created!"}
    />
  );
};

export default ProjectCreation;
