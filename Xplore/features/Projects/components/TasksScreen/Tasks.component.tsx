import { ScrollView } from "react-native";
import { Text, Icon, View } from "../../../../components";
import styles from "./Tasks.styles";

export const Tasks = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View backgroundColor="generalGray" style={styles.backgroundBox}>
            <View backgroundColor="backgroundSecondary" style={styles.innerBox}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginLeft: 32 }} variant="h4" color="linkText">
                  Design
                </Text>
                <Icon
                  style={{ marginLeft: 160 }}
                  size="medium"
                  name="help-circle"
                />
              </View>

              <Text style={{ marginLeft: 32 }} variant="h2" color="titleText">
                {" "}
                UX Brainstorm{" "}
              </Text>
              <View style={{ flexDirection: "row", marginLeft: 34.5 }}>
                <Icon
                  style={{ marginRight: 14.5 }}
                  size="medium"
                  name="calendar"
                />
                <Text
                  style={{ marginLeft: 0 }}
                  variant="smBody"
                  color="bodyText"
                >
                  13/12/2022
                </Text>
              </View>
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
                <Text style={{ marginLeft: 32 }} variant="h4" color="linkText">
                  Meeting
                </Text>
                <Icon
                  style={{ marginLeft: 160 }}
                  size="medium"
                  name="help-circle"
                />
              </View>

              <Text style={{ marginLeft: 32 }} variant="h2" color="titleText">
                {" "}
                Finish App UI{" "}
              </Text>
              <View style={{ flexDirection: "row", marginLeft: 34.5 }}>
                <Icon
                  style={{ marginRight: 14.5 }}
                  size="medium"
                  name="calendar"
                />
                <Text
                  style={{ marginLeft: 0 }}
                  variant="smBody"
                  color="bodyText"
                >
                  13/12/2022
                </Text>
              </View>
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
                <Text style={{ marginLeft: 32 }} variant="h4" color="linkText">
                  Meeting
                </Text>
                <Icon
                  style={{ marginLeft: 160 }}
                  size="medium"
                  name="help-circle"
                />
              </View>

              <Text style={{ marginLeft: 32 }} variant="h2" color="titleText">
                {" "}
                Spring Meeting{" "}
              </Text>
              <View style={{ flexDirection: "row", marginLeft: 34.5 }}>
                <Icon
                  style={{ marginRight: 14.5 }}
                  size="medium"
                  name="calendar"
                />
                <Text
                  style={{ marginLeft: 0 }}
                  variant="smBody"
                  color="bodyText"
                >
                  13/12/2022
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Tasks;
