import { StepIndicator } from "../../../components";
import { NavigationProp } from "@react-navigation/native";
import {
  AddMembers,
  AllTasks,
  Description,
  CategoryNGoals,
} from "../components";
import { useAllTasksInfo, updateProject } from "../../../services/api/projects";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Alert } from "react-native";

interface ProjectEditProps {
  navigation: NavigationProp<any>;
}

const ProjectEdit = (props: ProjectEditProps) => {
  const route = useRoute();
  let { projectInfo }: any = route.params;
  const [imageURL, setImageURL] = useState(projectInfo.imageURL);
  const [projName, setProjectName] = useState(projectInfo.name);
  const [startDate, setStartDate] = useState(
    projectInfo.startDate !== ""
      ? projectInfo.startDate.substring(0, projectInfo.startDate.indexOf("T"))
      : ""
  );
  const [endDate, setEndDate] = useState(
    projectInfo.endDate !== ""
      ? projectInfo.endDate.substring(0, projectInfo.endDate.indexOf("T"))
      : ""
  );
  const [description, setDescription] = useState(projectInfo.description);
  const [category, setCategory] = useState(projectInfo.category);
  const [goals, setGoals] = useState<string[]>(projectInfo.goals);
  const currentTasks = useAllTasksInfo(projectInfo.tasks);
  const [tasks, setTasks] = useState<Object[]>([]);
  const [allMembers, setAllMembers] = useState<string[]>(projectInfo.members);

  useEffect(() => {
    setTasks(currentTasks);
  }, [currentTasks]);

  const handleEditProject = () => {
    if (projName === "" || description === "" || category === "") {
      Alert.alert(
        "Error",
        "Project not edited, you are missing required field(s): name, description or category",
        [{ text: "OK", onPress: () => props.navigation.goBack() }]
      );
      return false;
    }

    // Getting only new tasks
    const newTasks = tasks.filter(
      (singleTask: any) =>
        !Object.values(projectInfo.tasks).includes(singleTask.taskID)
    );

    let values = [
      projName,
      description,
      category,
      startDate,
      endDate,
      goals,
      allMembers,
      newTasks,
    ];

    updateProject(projectInfo.projectID, values);
    Alert.alert("Success", "Project edited successfully", [
      { text: "OK", onPress: () => props.navigation.goBack() },
    ]);
    return true;
  };

  return (
    <StepIndicator
      handleSubmit={handleEditProject}
      headerTitle={"Edit Project"}
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
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          projName={projName}
          startDate={startDate}
          endDate={endDate}
          description={description}
          setImageURL={setImageURL}
        />,
        <CategoryNGoals
          setCategory={setCategory}
          setGoals={setGoals}
          category={category}
          goals={goals}
        />,
        <AllTasks
          navigation={props.navigation}
          setTasks={setTasks}
          tasks={tasks}
          allowCompleteTask={false}
          projectID={projectInfo.projectID}
        />,
        <AddMembers setAllMembers={setAllMembers} allMembers={allMembers} />,
      ]}
      navigation={props.navigation}
    />
  );
};

export default ProjectEdit;
