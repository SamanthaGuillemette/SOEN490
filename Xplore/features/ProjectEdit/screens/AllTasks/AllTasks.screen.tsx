import { ScrollView, Modal } from "react-native";
import { useState } from "react";
import { SquaredAddButton, Text, View } from "../../../../components";
import { TaskCard } from "../../../../components";
import styles from "./AllTasks.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "../../../ProjectCreation/screens/Tasks/components/Input";

export const AllTasks = () => {
  const [showModal, setShowModal] = useState<any>(false);

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
        <SquaredAddButton
          iconName="plus"
          onPress={() => setShowModal(!showModal)}
        />
        <Modal
          animationType="fade"
          transparent={true}
          visible={showModal}
          onRequestClose={() => setShowModal(!showModal)}
        >
          <SafeAreaView style={styles.safeAreaStyle}>
            <Input onPress={() => setShowModal(!showModal)} />
          </SafeAreaView>
        </Modal>
      </View>
    </SafeAreaView>
  );
};
