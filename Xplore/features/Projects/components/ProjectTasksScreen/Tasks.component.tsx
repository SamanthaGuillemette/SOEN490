import { ScrollView } from "react-native";
import { View } from "../../../../components";
import { TaskCard } from "../../../../components/TaskCard";

import styles from "./Tasks.styles";

export const Tasks = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <TaskCard
            taskType="Design"
            taskName="UX Brainstorm"
            taskDate="13/12/2022"
          />
          <TaskCard
            taskType="Meeting"
            taskName="Finish App UI"
            taskDate="13/12/2022"
          />
          <TaskCard
            taskType="Meeting"
            taskName="Spring Meeting"
            taskDate="13/12/2022"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Tasks;
