import { Modal } from "react-native";
import { useState } from "react";
import styles from "./AllTasks.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  SquaredButton,
  TaskCardSwipeable,
} from "../../../../components";
import { TaskCard } from "../../../../components/TaskCard";

import { TaskModal } from "../TaskModal";
import { NavigationProp } from "@react-navigation/native";

interface AllTasksProps {
  navigation: NavigationProp<any>;
  setTasks: (value: Object[]) => void;
  tasks: Object[];
  allowCompleteTask?: boolean;
  projectID?: string;
}

export const AllTasks = (props: AllTasksProps) => {
  const { navigation, tasks, setTasks, allowCompleteTask, projectID } = props;
  const [showModal, setShowModal] = useState<any>(false);

  return (
    <View style={styles.mainContainer}>
      <Text color="titleText" variant="h3" style={styles.center}>
        {tasks.length !== 0
          ? "Swipe to delete a task"
          : "Click on the plus icon below\n to create a task"}
      </Text>

      <View style={styles.content}>
        {tasks.map((task: any, index) => (
          <TaskCardSwipeable
            key={index}
            taskInfo={task}
            navigation={navigation}
            allowCompleteTask={allowCompleteTask}
            projectID={projectID}
            setTasks={setTasks}
            tasks={tasks}
          />
        ))}
      </View>

      <View style={styles.squareButton}>
        <SquaredButton
          iconName="plus"
          onPress={() => setShowModal(!showModal)}
        />
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(!showModal)}
      >
        <SafeAreaView edges={["top"]} style={styles.mainContainer}>
          <TaskModal
            onPress={() => setShowModal(!showModal)}
            setTasks={setTasks}
            tasks={tasks}
          />
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default AllTasks;
