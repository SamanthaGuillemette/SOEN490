import { useState } from "react";
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { ShadowView } from "../../../components";
import styles from "./AddTaskModalButton.styles";
import { useThemeColor } from "../../../hooks";
import { AddTaskModal } from "./AddTaskModal.component";
import { Icon } from "../../../components";

interface AddTaskModalButtonProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
}

export const AddTaskModalButton = (props: AddTaskModalButtonProps) => {
  const { ...restOfProps } = props;
  const [addTaskModalVisible, setAddTaskModalVisible] = useState<any>(false);
  const primaryBackground = useThemeColor("primaryBackground");
  return (
    <ShadowView style={[styles.button, { backgroundColor: primaryBackground }]}>
      <TouchableOpacity
        {...restOfProps}
        style={[{ backgroundColor: primaryBackground }]}
        onPress={() => setAddTaskModalVisible(true)}
      >
        {addTaskModalVisible === true && (
          <AddTaskModal setAddTaskModalVisible={setAddTaskModalVisible} />
        )}
        <Icon name="edit-3" size="large" color="primary" style={styles.icon} />
      </TouchableOpacity>
    </ShadowView>
  );
};
