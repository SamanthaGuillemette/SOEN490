import { Modal } from "react-native";
import { useState } from "react";
import styles from "./AllTasks.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, SquaredButton } from "../../../../components";
import { TaskCard } from "../../../../components/TaskCard";

import { TaskModal } from "../TaskModal";
import { NavigationProp } from "@react-navigation/native";

interface AllTasksProps {
  navigation: NavigationProp<any>;
}

export const AllTasks = (props: AllTasksProps) => {
  const { navigation } = props;
  const [showModal, setShowModal] = useState<any>(false);
  return (
    <View style={styles.mainContainer}>
      <Text color="titleText" variant="h3" style={styles.alignLeft}>
        Click here to select a task
      </Text>

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
          <TaskModal onPress={() => setShowModal(!showModal)} />
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default AllTasks;
