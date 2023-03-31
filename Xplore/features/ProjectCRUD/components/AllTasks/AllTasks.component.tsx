import { Modal } from "react-native";
import { useState } from "react";
import styles from "./AllTasks.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, SquaredButton } from "../../../../components";
import { TaskCardSwipeable } from "../../../../components/TaskCardSwipeable";

import { TaskModal } from "../TaskModal";
import { NavigationProp } from "@react-navigation/native";

interface AllTasksProps {
  navigation: NavigationProp<any>;
  setTasks: (value: Object[]) => void;
  tasks: Object[];
}

export const AllTasks = (props: AllTasksProps) => {
  const { navigation, tasks, setTasks } = props;
  const [showModal, setShowModal] = useState<any>(false);
  return (
    <View style={styles.mainContainer}>
      <Text color="titleText" variant="h3" style={styles.center}>
        {tasks.length !== 0
          ? "Click here to select a task"
          : "Click on the plus icon below\n to create a task"}
      </Text>

      <View style={styles.content}>
        {tasks.map((task: any, index) => (
          <TaskCardSwipeable
            key={index}
            taskCategory={task.category}
            taskName={task.name}
            taskDate={task.startDate}
            navigation={navigation}
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
