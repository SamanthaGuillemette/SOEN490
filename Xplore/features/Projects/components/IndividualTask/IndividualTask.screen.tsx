import { NavigationProp, useRoute } from "@react-navigation/native";
import styles from "./IndividualTask.styles";
import { ScrollView, SafeAreaView } from "react-native";
import TopHeader from "../../../../navigation/TopHeader.component";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import { TaskIllustration } from "./TaskIllustration/TaskIllustration.component";
import { DescriptionCard } from "./DescriptionCard/DescriptionCard.component";
import { View } from "../../../../components";
interface IndividualTaskScreenProps {
  navigation: NavigationProp<any>;
}

const IndividualTask = (props: IndividualTaskScreenProps) => {
  const { navigation } = props;
  const route = useRoute();
  const homeBackground = useThemeColor("backgroundSecondary");
  let { taskInfo }: any = route.params;

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: homeBackground }]}
    >
      <TopHeader screenName={taskInfo.name} navigation={navigation} />
      <ScrollView>
        <View style={styles.viewMain}>
          <TaskIllustration />
          <DescriptionCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default IndividualTask;
