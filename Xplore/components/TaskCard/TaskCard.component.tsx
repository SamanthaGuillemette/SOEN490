import { View } from "../View";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { TouchableOpacity } from "react-native";
import { ListItem } from "@rneui/themed";
import { useThemeColor } from "../../hooks";
import styles from "./TaskCard.styles";
import { NavigationProp } from "@react-navigation/native";
import { setTaskCompleted, deleteTask } from "../../services/api/projects";

interface taskContentProps {
  navigation: NavigationProp<any>;
  taskInfo: any;
}

export const actions = (props: any) => {
  const taskID = props.taskID;

  return (
    <View style={styles.icons}>
      <TouchableOpacity onPress={() => setTaskCompleted(taskID)}>
        <Icon
          color="success"
          size="large"
          name="check-square"
          style={styles.infoIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteTask(taskID)}>
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

export const taskContent = (props: taskContentProps) => {
  const task = props.taskInfo;

  return (
    <View backgroundColor="backgroundSecondary" style={styles.innerBox}>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("IndividualTask", {
            taskInfo: task,
          })
        }
      >
        <View style={styles.taskContentContainer}>
          <Text style={styles.taskCategory} variant="h4" color="linkText">
            {task.category}
          </Text>

          <Icon style={styles.taskInfoIcon} size="medium" name="help-circle" />
        </View>
        <Text style={styles.taskName} variant="h2" color="titleText">
          {task.name}
        </Text>
        <View style={styles.dateContainer}>
          <Icon style={styles.calenderIcon} size="medium" name="calendar" />
          <Text style={styles.date} variant="smBody" color="bodyText">
            {task.endDate.substring(0, task.endDate.indexOf("T"))}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export const TaskCard = (props: taskContentProps) => {
  const generalGray = useThemeColor("generalGray");

  return (
    <View style={styles.backgroundBox}>
      <ListItem.Swipeable
        rightWidth={28}
        rightContent={actions(props.taskInfo)}
        rightStyle={[styles.righContentStyle, { backgroundColor: generalGray }]}
        containerStyle={styles.listContainer}
      >
        <ListItem.Content>{taskContent(props)}</ListItem.Content>
      </ListItem.Swipeable>
    </View>
  );
};
