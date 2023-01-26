import { ScrollView } from "react-native";
import { SquaredAddButton, View } from "../../../../../components";
import { TaskCard } from "../../../../../components";
import styles from "./AllTasks.styles";

export const AllTasks = () => {
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
          <SquaredAddButton />
        </View>
      </ScrollView>
    </View>
  );
};
