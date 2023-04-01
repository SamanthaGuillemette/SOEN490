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
  allowCompleteTask?: boolean;
  projectID?: string;
  setTasks?: (value: Object[]) => void;
  tasks?: Object[];
}

export const actions = (props: any) => {
  const taskID = props.taskInfo.taskID;
  const allowCompleteTask = props.allowCompleteTask;

  const handleOnDelete = () => {
    //const newList = props.tasks.filter((task: any) => task.taskID !== taskID); // removing from tasks
    //props.setTasks(newList); // overwriting old tasks list

    // deleting from db if its project details or edit projects
    if (props.projectID !== undefined) {
      //deleteTask(taskID, props.projectID);
    }
  };

  const handleOnComplete = () => {
    props.tasks.forEach((task: any) => {
      if (task.taskID === taskID) {
        task.completed = true;
      }
    });

    //console.log(oldList);
    props.setTasks(props.tasks); // overwriting old tasks list

    console.log(props.tasks);
    //setTaskCompleted(taskID); // updating in db
  };

  return allowCompleteTask !== false ? (
    <View style={styles.icons}>
      <TouchableOpacity onPress={handleOnComplete}>
        <Icon
          color="success"
          size="large"
          name="check-square"
          style={styles.infoIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleOnDelete}>
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
      <TouchableOpacity onPress={handleOnDelete}>
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
