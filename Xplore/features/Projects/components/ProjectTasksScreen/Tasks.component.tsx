import { NavigationProp } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { View } from "../../../../components";
import { TaskCardSwipeable } from "../../../../components/TaskCardSwipeable";
import styles from "./Tasks.styles";
import { useAllTasksInfo } from "../../../../services/api/projects";
import { useRoute } from "@react-navigation/native";

interface TasksProps {
  navigation: NavigationProp<any>;
}

export const Tasks = (props: TasksProps) => {
  const route = useRoute();
  let { item }: any = route.params;
  const { navigation } = props;
  const allTasks = useAllTasksInfo(item.tasks);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {allTasks
            .filter((singleTask) => !singleTask.completed)
            .map((singleTask, i) => (
              <TaskCardSwipeable
                navigation={navigation}
                taskInfo={singleTask}
                key={i}
                projectID={item.projectID}
                isProjectEdit={false}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Tasks;
