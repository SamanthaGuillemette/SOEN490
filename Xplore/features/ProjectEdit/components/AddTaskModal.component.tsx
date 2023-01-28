import { NavigationProp } from "@react-navigation/native";
import { useState } from "react";
import { Modal, View } from "react-native";
// import { useThemeColor } from "../../../hooks/useThemeColor";
import Tasks from "../../ProjectCreation/screens/Tasks/screens/Tasks.screen";

interface AddTaskModalProps {
  setAddTaskModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddTaskModal = ({
  setAddTaskModalVisible: setAddTaskModalVisible,
}: AddTaskModalProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  // const background = useThemeColor("background");

  function handleClose() {
    setModalVisible(!modalVisible);
    setAddTaskModalVisible(!modalVisible);
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleClose}
    >
      <Tasks />
    </Modal>
  );
};
