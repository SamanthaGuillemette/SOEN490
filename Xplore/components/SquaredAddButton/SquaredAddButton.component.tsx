import { useState } from "react";
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { useThemeColor } from "../../hooks";
import { Icon } from "../Icon";
import { ShadowView } from "../ShadowView";
import styles from "./SquaredAddButton.styles";
import { AddTaskModal } from "../../features/ProjectEdit/components/AddTaskModal.component";

interface SquaredAddButtonProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
}

export const SquaredAddButton = (props: SquaredAddButtonProps) => {
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
        <Icon name="plus" size="large" color="primary" style={styles.icon} />
      </TouchableOpacity>
    </ShadowView>
  );
};
