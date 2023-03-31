import { StepIndicator } from "../../../components";
import { NavigationProp } from "@react-navigation/native";
import {
  AddMembers,
  AllTasks,
  Description,
  CategoryNGoals,
} from "../components";
import { useState } from "react";
import {
  useCreateNewProject,
  updateUserProjList,
} from "../../../services/api/projects";
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
  const [projName, setProjectName] = useState("");
  const [projectGoals, setGoals] = useState<string[]>([]);
  const [buildProject, setBuildProject] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const newProject = useCreateNewProject();

  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;

  const [allMembers, setAllMembers] = useState<string[]>([]);

  const handleBuildProject = () => {
    if (projName === "" || description === "" || category === "") {
      Alert.alert(
        "Error",
        "Project not created, you are missing required field(s): name, description or category",
        [{ text: "OK", onPress: () => props.navigation.navigate("Home") }]
      );
      return false;
    }

    newProject
      .mutateAsync({
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
      })
      .then(() => updateUserProjList(allMembers));
    setBuildProject(true);
    Alert.alert("Success", "Project created successfully", [
      { text: "OK", onPress: () => props.navigation.navigate("Home") },
    ]);
    resetValues();
    return true;
  };

  const resetValues = () => {
    setDescription("");
    setCategory("");
    setTasks([]);
    setAllMembers([]);
    setProjectName("");
    setGoals([]);
    setBuildProject(false);
    setImageURL("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <StepIndicator
      handleSubmit={handleBuildProject}
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
        <AddMembers setAllMembers={setAllMembers} />,
        <AllTasks
          navigation={props.navigation}
          setTasks={setTasks}
          tasks={tasks}
        />,
      ]}
      navigation={props.navigation}
    />
  );
};

export default ProjectCreation;
