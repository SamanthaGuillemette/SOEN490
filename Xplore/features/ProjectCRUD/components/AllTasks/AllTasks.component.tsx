import { Modal } from "react-native";
import { useState } from "react";
import styles from "./AllTasks.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { TaskCard, View, Text, SquaredButton } from "../../../../components";
import { TaskModal } from "../TaskModal";

export const AllTasks = () => {
  const [showModal, setShowModal] = useState<any>(false);

  return (
    <View style={styles.mainContainer}>
      <Text color="titleText" variant="h3" style={styles.alignLeft}>
        Click here to select a task
      </Text>
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
