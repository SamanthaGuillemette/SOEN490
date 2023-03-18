import { View } from "../View";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { TouchableOpacity } from "react-native";
import { ListItem } from "@rneui/themed";
import { useThemeColor } from "../../hooks";
import styles from "./TaskCard.styles";
import { NavigationProp } from "@react-navigation/native";

interface taskContentProps {
  taskType: string;
  taskName: string;
  taskDate: string;
  navigation: NavigationProp<any>;
}

export const actions = () => {
  return (
    <View style={styles.icons}>
      <TouchableOpacity>
        <Icon
          color="success"
          size="large"
          name="check-square"
          style={styles.infoIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
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
  return (
    <View backgroundColor="backgroundSecondary" style={styles.innerBox}>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("IndividualTask", {
            taskName: props.taskName,
          })
        }
      >
        <View style={styles.taskContentContainer}>
          <Text style={styles.taskType} variant="h4" color="linkText">
            {props.taskType}
          </Text>

          <Icon style={styles.taskInfoIcon} size="medium" name="help-circle" />
        </View>
        <Text style={styles.taskName} variant="h2" color="titleText">
          {props.taskName}
        </Text>
        <View style={styles.dateContainer}>
          <Icon style={styles.calenderIcon} size="medium" name="calendar" />
          <Text style={styles.date} variant="smBody" color="bodyText">
            {props.taskDate}
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
        rightContent={actions}
        rightStyle={[styles.righContentStyle, { backgroundColor: generalGray }]}
        containerStyle={styles.listContainer}
      >
        <ListItem.Content>{taskContent(props)}</ListItem.Content>
      </ListItem.Swipeable>
    </View>
  );
};
