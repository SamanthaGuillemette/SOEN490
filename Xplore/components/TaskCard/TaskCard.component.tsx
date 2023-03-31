import { View } from "../View";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { TouchableOpacity } from "react-native";
import styles from "./TaskCard.styles";
import { NavigationProp } from "@react-navigation/native";

interface taskContentProps {
  navigation: NavigationProp<any>;
  taskInfo: any;
}
export const TaskCard = (props: taskContentProps) => {
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
        <View style={styles.taskCardContainer}>
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
