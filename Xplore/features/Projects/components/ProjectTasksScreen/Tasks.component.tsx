import { NavigationProp } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { View } from "../../../../components";
import { TaskCard } from "../../../../components/TaskCard";
import styles from "./Tasks.styles";
import { useAllTasksInfo } from "../../../../services/api/projects";

interface TasksProps {
  navigation: NavigationProp<any>;
  route: any;
}

export const Tasks = (props: TasksProps) => {
  const item = props.route.params.item;
  const { navigation } = props;
  const allTasks = useAllTasksInfo(item.tasks);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {allTasks.map((singleTask) => (
            <TaskCard
              taskType={singleTask.category}
              taskName={singleTask.name}
              taskDate={singleTask.endDate.substring(
                0,
                singleTask.endDate.indexOf("T")
              )}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Tasks;
