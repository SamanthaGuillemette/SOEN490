import { NavigationProp, useRoute } from "@react-navigation/native";
import styles from "./IndividualTask.styles";
import { ScrollView, SafeAreaView } from "react-native";
import TopHeader from "../../../../navigation/TopHeader.component";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import { TaskIllustration } from "../components/TaskIllustration/TaskIllustration.component";
import { DescriptionCard } from "../components/DescriptionCard/DescriptionCard.component";
import { View } from "../../../../components";
interface IndividualTaskScreenProps {
  navigation: NavigationProp<any>;
  taskName: string;
}

const IndividualTask = (props: IndividualTaskScreenProps) => {
  const { navigation } = props;
  const route = useRoute();
  const homeBackground = useThemeColor("backgroundSecondary");

  let { taskName }: any = route.params;

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: homeBackground }]}
    >
      <ScrollView>
        <View style={styles.viewMain}>
          <TopHeader screenName={taskName} navigation={navigation} />
          <TaskIllustration />
          <DescriptionCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default IndividualTask;
