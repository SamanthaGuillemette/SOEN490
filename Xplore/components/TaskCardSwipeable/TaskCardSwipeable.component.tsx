import { View } from "../View";

import { Icon } from "../Icon";
import { TouchableOpacity } from "react-native";
import { ListItem } from "@rneui/themed";
import { useThemeColor } from "../../hooks";
import styles from "./TaskCardSwipeable.styles";
import { NavigationProp } from "@react-navigation/native";
import { setTaskCompleted, deleteTask } from "../../services/api/projects";
import { TaskCard } from "../TaskCard/TaskCard.component";

interface taskContentProps {
  navigation: NavigationProp<any>;
  taskInfo: any;
  isProjectEdit?: boolean;
  projectID?: string; // TO FIX
}

export const actions = (props: any) => {
  const taskID = props.taskInfo.taskID;
  const isProjectEdit = props.isProjectEdit;

  return isProjectEdit === false ? (
    <View style={styles.icons}>
      <TouchableOpacity onPress={() => setTaskCompleted(taskID)}>
        <Icon
          color="success"
          size="large"
          name="check-square"
          style={styles.infoIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteTask(taskID, props.projectID)}>
        <Icon
          color="error"
          size="large"
          name="trash-2"
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.iconsProjectEdit}>
      <TouchableOpacity onPress={() => deleteTask(taskID, props.projectID)}>
        <Icon
          color="error"
          size="large"
          name="trash-2"
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export const TaskCardSwipeable = (props: taskContentProps) => {
  const generalGray = useThemeColor("generalGray");

  return (
    <View style={styles.backgroundBox}>
      <ListItem.Swipeable
        rightWidth={28}
        rightContent={actions(props)}
        rightStyle={[styles.righContentStyle, { backgroundColor: generalGray }]}
        containerStyle={styles.listContainer}
      >
        <ListItem.Content>{TaskCard(props)}</ListItem.Content>
      </ListItem.Swipeable>
    </View>
  );
};
