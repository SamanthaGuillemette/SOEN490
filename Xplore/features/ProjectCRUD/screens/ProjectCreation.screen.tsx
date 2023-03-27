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
import { useCreateNewProject } from "../../../services/api/projects";
import { useQuery } from "react-query";
import api from "../../../services/appwrite/api";

interface ProjectCreationProps {
  navigation: NavigationProp<any>;
}

const ProjectCreation = (props: ProjectCreationProps) => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tasks, setTasks] = useState<Object[]>([]);
  const [allMembers, setAllMembers] = useState<any[]>([]);
  // const [allLinks, setAllLinks] = useState([]);
  const [projName, setProjectName] = useState("");
  const [projectGoals, setGoals] = useState<string[]>([]);
  const [buildProject, setBuildProject] = useState(false);
  // const [imageURL, setImageURL] = useState("");
  const [startDate, setStartDate] = useState("");
  const newProject = useCreateNewProject();
  const date = new Date().toISOString();
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;

  if (buildProject) {
    console.log({
      name: projName,
      description: description,
      category: category,
      tasks: tasks,
      startDate: Date.now().toString(),
      endDate: Date.now().toString(),
      goals: projectGoals,
      members: allMembers,
    });
    newProject.mutateAsync({
      project: {
        name: projName,
        description: description,
        category: category,
        startDate: date,
        endDate: date,
        goals: projectGoals,
        members: allMembers,
        percentComplete: 0,
        projectOwner: userId,
      },
      tasks: tasks,
    });
    setBuildProject(false);
  }
  console.log(projName, "projectName");
  console.log(allMembers);
  console.log(newProject.data);

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
          // setImageURL={setImageURL}
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
