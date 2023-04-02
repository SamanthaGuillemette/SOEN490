import { StepIndicator } from "../../../components";
import { NavigationProp } from "@react-navigation/native";
import {
  AddMembers,
  AllTasks,
  Description,
  CategoryNGoals,
} from "../components";
import { useAllTasksInfo } from "../../../services/api/projects";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";

interface ProjectEditProps {
  navigation: NavigationProp<any>;
}

const ProjectEdit = (props: ProjectEditProps) => {
  const route = useRoute();
  let { projectInfo }: any = route.params;

  // project image
  const [imageURL, setImageURL] = useState(projectInfo.imageURL);
  const [projName, setProjectName] = useState(projectInfo.name);
  const [startDate, setStartDate] = useState(
    projectInfo.startDate !== ""
      ? projectInfo.startDate.substring(0, projectInfo.startDate.indexOf("T"))
      : "YYYY-MM-DD"
  );
  const [endDate, setEndDate] = useState(
    projectInfo.endDate !== ""
      ? projectInfo.endDate.substring(0, projectInfo.endDate.indexOf("T"))
      : "YYYY-MM-DD"
  );
  const [description, setDescription] = useState(projectInfo.description);

  const [category, setCategory] = useState(projectInfo.category);
  const [goals, setGoals] = useState<string[]>(projectInfo.goals);
  const currentTasks = useAllTasksInfo(projectInfo.tasks);
  const [tasks, setTasks] = useState<Object[]>([]);
  const [allMembers, setAllMembers] = useState(projectInfo.members);

  useEffect(() => {
    setTasks(currentTasks);
  }, [currentTasks]);

  console.log("ALL MEMBERS", allMembers);

  //ALL MEMBERS ["63c9eb6acc2800870801", "64122d5d3b705750006c", "6414f71a243677a72a85"]
  return (
    <StepIndicator
      headerTitle={"Edit Projects"}
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
