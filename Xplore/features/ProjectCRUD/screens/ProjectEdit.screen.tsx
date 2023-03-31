import { StepIndicator } from "../../../components";
import { NavigationProp } from "@react-navigation/native";
import {
  AddLinks,
  AddMembers,
  AllTasks,
  Description,
  CategoryNGoals,
} from "../components";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";

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

  const [projectCategory, setCategory] = useState("");
  const [projectGoals, setGoals] = useState<string[]>([]);

  //const [tasks, setTasks] = useState<Object[]>(projectInfo.tasks);
  //const [allMembers, setAllMembers] = useState(projectInfo.description);

  return (
    <StepIndicator
      headerTitle={"Edit Projects"}
      stepLabels={[
        "Description",
        "Category & Goals",
        "All Tasks",
        "Add Members",
      ]}
      numOfSteps={5}
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
        /*<CategoryNGoals setCategory={setCategory} setGoals={setGoals} />,
        <AllTasks
          navigation={props.navigation}
          //setTasks={setTasks}
          //tasks={tasks}
        />,
        <AddMembers />*/
      ]}
      navigation={props.navigation}
      onSubmitMsg={"Project Updated!"}
    />
  );
};

export default ProjectEdit;
