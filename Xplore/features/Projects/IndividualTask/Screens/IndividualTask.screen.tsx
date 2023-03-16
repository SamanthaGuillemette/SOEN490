import { NavigationProp, useRoute } from "@react-navigation/native";
import styles from "./IndividualTask.styles";
import { ScrollView } from "react-native";
import TopHeader from "../../../../navigation/TopHeader.component";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import { TaskIllustration } from "../components/TaskIllustration/TaskIllustration.component";
import { DescriptionCard } from "../components/DescriptionCard/DescriptionCard.component";
interface IndividualTaskScreenProps {
  navigation: NavigationProp<any>;
  taskName: string;
}

const IndividualTask = (props: IndividualTaskScreenProps) => {
  const { navigation } = props;
  const route = useRoute();
  let { taskName }: any = route.params;

  const backgroundSecondary = useThemeColor("backgroundSecondary");
  return (
    <ScrollView
      style={[styles.scrollViewStyle, { backgroundColor: backgroundSecondary }]}
    >
      <TopHeader screenName={taskName} navigation={navigation} />
      <TaskIllustration />
      <DescriptionCard />
    </ScrollView>
  );
};
export default IndividualTask;
