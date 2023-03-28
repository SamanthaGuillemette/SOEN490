import styles from "./DescriptionCard.styles";
import { useThemeColor } from "../../../../../hooks";
import { Text, View } from "../../../../../components";
import { useRoute } from "@react-navigation/native";

export const DescriptionCard = () => {
  const bgColor = useThemeColor("backgroundSecondary");
  const route = useRoute();
  let { taskInfo }: any = route.params;
  const endDate = taskInfo.endDate.substring(0, taskInfo.endDate.indexOf("T"));
  const startDate = taskInfo.startDate.substring(
    0,
    taskInfo.startDate.indexOf("T")
  );

  return (
    <View style={[styles.MainContainer, { borderTopColor: bgColor }]}>
      <View style={styles.OuterContainer}>
        <Text variant="h3" color="titleText" style={styles.InnerContainer}>
          Description
        </Text>
        <Text variant="body" color="bodyText" style={{ textAlign: "justify" }}>
          {taskInfo.description}
        </Text>
      </View>
      <View style={styles.OuterContainer}>
        <Text variant="h3" color="titleText" style={styles.InnerContainer}>
          Category
        </Text>
        <Text variant="body" color="bodyText">
          {taskInfo.category}
        </Text>
      </View>
      <View style={styles.OuterContainer}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text variant="h3" color="titleText" style={styles.InnerContainer}>
              Starts
            </Text>
            <Text variant="body" color="bodyText" style={styles.OuterContainer}>
              {startDate}
            </Text>
          </View>
          <View style={{ marginLeft: 108 }}>
            <Text variant="h3" color="titleText" style={styles.InnerContainer}>
              Ends
            </Text>
            <Text variant="body" color="bodyText" style={styles.OuterContainer}>
              {endDate}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
