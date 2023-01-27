import { ScrollView } from "react-native";
import { SquaredAddButton, Text, View } from "../../../../../components";
import { TaskCard } from "../../../../../components";
import styles from "./AllTasks.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp } from "@react-navigation/native";

interface AllTasksProps {
  navigation: NavigationProp<any>;
}

export const AllTasks = (props: AllTasksProps) => {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View style={styles.alignLeft}>
        <Text color="titleText" variant="h3">
          Click here to select a task
        </Text>
      </View>
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
        <SquaredAddButton onPress={() => navigation.navigate("CreateTask")} />
      </View>
    </SafeAreaView>
  );
};
