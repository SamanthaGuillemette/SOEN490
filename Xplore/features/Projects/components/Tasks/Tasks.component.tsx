import { ScrollView } from "react-native";
import { Text, Icon, View, LinkButton } from "../../../../components";
import styles from "./Tasks.styles";

interface TasksProps {}

export const Tasks = (props: TasksProps) => {
  return (
    <ScrollView>
      <View backgroundColor="generalGray" style={styles.backgroundBox}>
        <View backgroundColor="backgroundSecondary" style={styles.innerBox}>
          <View style={{ flexDirection: "row" }}>
            <LinkButton>Design</LinkButton>
            <Icon style={{ marginLeft: 180 }} size="small" name="help-circle" />
          </View>

          <Text variant="h2" color="titleText">
            {" "}
            UX Brainstorm{" "}
          </Text>
          <Text variant="smBody" color="bodyText">
            <Icon name="calendar" size="small" /> 13/12/2022
          </Text>
        </View>
        <View style={styles.icons}>
          <Icon
            style={{ marginTop: -50 }}
            color="error"
            size="large"
            name="trash-2"
          />
          <Icon
            style={{ marginTop: -70 }}
            color="success"
            size="large"
            name="check-square"
          />
        </View>
      </View>

      <View backgroundColor="generalGray" style={styles.backgroundBox}>
        <View backgroundColor="backgroundSecondary" style={styles.innerBox}>
          <View style={{ flexDirection: "row" }}>
            <LinkButton>Meeting</LinkButton>
            <Icon style={{ marginLeft: 180 }} size="small" name="help-circle" />
          </View>

          <Text variant="h2" color="titleText">
            {" "}
            Finish App UI{" "}
          </Text>
          <Text variant="smBody" color="bodyText">
            <Icon name="calendar" size="small" /> 13/12/2022
          </Text>
        </View>
        <View style={styles.icons}>
          <Icon
            style={{ marginTop: -50 }}
            color="error"
            size="large"
            name="trash-2"
          />
          <Icon
            style={{ marginTop: -70 }}
            color="success"
            size="large"
            name="check-square"
          />
        </View>
      </View>
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <View backgroundColor="backgroundSecondary" style={styles.innerBox}>
          <View style={{ flexDirection: "row" }}>
            <LinkButton>Meeting</LinkButton>
            <Icon style={{ marginLeft: 180 }} size="small" name="help-circle" />
          </View>

          <Text variant="h2" color="titleText">
            {" "}
            Spring Meeting{" "}
          </Text>
          <Text variant="smBody" color="bodyText">
            <Icon name="calendar" size="small" /> 13/12/2022
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Tasks;
