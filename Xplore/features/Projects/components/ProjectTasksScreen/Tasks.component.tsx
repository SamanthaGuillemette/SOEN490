import { NavigationProp } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { View } from "../../../../components";
import { TaskCardSwipeable } from "../../../../components/TaskCardSwipeable";
import styles from "./Tasks.styles";
import { useAllTasksInfo } from "../../../../services/api/projects";
import { useRoute } from "@react-navigation/native";
import { TaskCard } from "../../../../components/TaskCard";
import { useState, useEffect } from "react";

interface TasksProps {
  navigation: NavigationProp<any>;
}

export const Tasks = (props: TasksProps) => {
  const route = useRoute();
  let { item }: any = route.params;
  const { navigation } = props;
  const routes = navigation.getState()?.routes;
  const prevScreen = routes[routes.length - 2].name;

  const currentTasks = useAllTasksInfo(item.tasks);
  const [tasks, setTasks] = useState<Object[]>([]);

  useEffect(() => {
    setTasks(currentTasks);
  }, [currentTasks]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {tasks
            .filter((singleTask: any) => !singleTask.completed)
            .map((singleTask, i) =>
              prevScreen === "UserProjects" ? (
                <TaskCardSwipeable
                  navigation={navigation}
                  taskInfo={singleTask}
                  key={i}
                  projectID={item.projectID}
                  tasks={tasks}
                  setTasks={setTasks}
                  allowCompleteTask={true}
                />
              ) : (
                <TaskCard
                  navigation={navigation}
                  taskInfo={singleTask}
                  key={i}
                />
              )
            )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Tasks;
