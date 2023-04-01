import { NavigationProp } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { View } from "../../../../components";
import { TaskCardSwipeable } from "../../../../components/TaskCardSwipeable";
import styles from "./Tasks.styles";
import { useAllTasksInfo } from "../../../../services/api/projects";
import { useRoute } from "@react-navigation/native";
import { TaskCard } from "../../../../components/TaskCard";

interface TasksProps {
  navigation: NavigationProp<any>;
}

export const Tasks = (props: TasksProps) => {
  const route = useRoute();
  let { item }: any = route.params;
  const { navigation } = props;
  const allTasks = useAllTasksInfo(item.tasks);
  const routes = navigation.getState()?.routes;
  const prevScreen = routes[routes.length - 2].name;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {allTasks
            .filter((singleTask) => !singleTask.completed)
            .map((singleTask, i) =>
              prevScreen === "UserProjects" ? (
                <TaskCardSwipeable
                  navigation={navigation}
                  taskInfo={singleTask}
                  key={i}
                  projectID={item.projectID}
                  isProjectEdit={false}
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
