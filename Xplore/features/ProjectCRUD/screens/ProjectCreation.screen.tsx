import { StepIndicator } from "../../../components";
import { NavigationProp } from "@react-navigation/native";
import {
  AddMembers,
  AllTasks,
  Description,
  CategoryNGoals,
} from "../components";
import { useState } from "react";
import { useCreateNewProject } from "../../../services/api/projects";
import { useQuery } from "react-query";
import api from "../../../services/appwrite/api";
import { Alert } from "react-native";

interface ProjectCreationProps {
  navigation: NavigationProp<any>;
}

const ProjectCreation = (props: ProjectCreationProps) => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tasks, setTasks] = useState<Object[]>([]);
  const [allMembers, setAllMembers] = useState<any[]>([]);
  const [projName, setProjectName] = useState("");
  const [projectGoals, setGoals] = useState<string[]>([]);
  const [buildProject, setBuildProject] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const newProject = useCreateNewProject();

  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;

  const handleBuildProject = () => {
    if (projName === "" || description === "" || category === "") {
      Alert.alert(
        "Project not created, you are missing required field(s): name, description or category"
      );
      return false;
    }

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
        startDate: startDate,
        endDate: endDate,
        goals: projectGoals,
        members: allMembers,
        percentComplete: 0,
        projectOwner: userId,
        imageURL: imageURL,
      },
      tasks: tasks,
    });
    setBuildProject(true);
    Alert.alert("Project Created successfully");
    return true;
  };

  const submitMsg = buildProject ? "Project Created!" : "Project Not Created!";

  console.log(buildProject);
  console.log(submitMsg);

  console.log(newProject.data);
  console.log("startDate:", startDate);
  console.log("endDate:", endDate);

  return (
    <StepIndicator
      setBuildProject={handleBuildProject}
      headerTitle={"Create Projects"}
      stepLabels={[
        "Description",
        "Category & Goals",
        "Add Members",
        "All Tasks",
      ]}
      numOfSteps={4}
      screens={[
        <Description
          setProjectName={setProjectName}
          setDescription={setDescription}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setImageURL={setImageURL}
        />,
        <CategoryNGoals setCategory={setCategory} setGoals={setGoals} />,
        <AddMembers setAllMembers={setAllMembers} allMembers={allMembers} />,
        <AllTasks
          navigation={props.navigation}
          setTasks={setTasks}
          tasks={tasks}
        />,
      ]}
      navigation={props.navigation}
      // onSubmitMsg={submitMsg}
    />
  );
};

export default ProjectCreation;
