import { ScrollView } from "react-native";
import { SquaredAddButton, Text, View } from "../../../../../components";
import { TaskCard } from "../../../../../components";
import styles from "./AllTasks.styles";
// import { ShadowView } from "../../../../../components";

export const AllTasks = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.alignLeft}>
        <Text color="titleText" variant="h3">
          Click here to select a task
        </Text>
      </View>
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
      <SquaredAddButton />
    </ScrollView>
  );
};
