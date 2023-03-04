import { ScrollView, Modal } from "react-native";
import { useState } from "react";
import { SquaredButton, Text, View } from "../../../../../components";
import { TaskCard } from "../../../../../components";
import styles from "./AllTasks.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "../components/Input";

export const AllTasks = () => {
  const [showModal, setShowModal] = useState<any>(false);

  return (
    <View style={styles.mainContainer}>
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
        <SquaredButton
          iconName="plus"
          onPress={() => setShowModal(!showModal)}
        />
        <Modal
          animationType="fade"
          transparent={true}
          visible={showModal}
          onRequestClose={() => setShowModal(!showModal)}
        >
          <SafeAreaView>
            <Input onPress={() => setShowModal(!showModal)} />
          </SafeAreaView>
        </Modal>
      </View>
    </View>
  );
};
