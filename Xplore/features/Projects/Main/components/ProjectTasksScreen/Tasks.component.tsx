import { NavigationProp } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { View } from "../../../../../components";
import { TaskCard } from "../../../../../components/TaskCard";
import styles from "./Tasks.styles";

interface TasksProps {
  navigation: NavigationProp<any>;
}

export const Tasks = (props: TasksProps) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <TaskCard
            taskType="Design"
            taskName="UX Brainstorm"
            taskDate="13/12/2022"
            navigation={navigation}
          />
          <TaskCard
            taskType="Meeting"
            taskName="Finish App UI"
            taskDate="13/12/2022"
            navigation={navigation}
          />
          <TaskCard
            taskType="Meeting"
            taskName="Spring Meeting"
            taskDate="13/12/2022"
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Tasks;
