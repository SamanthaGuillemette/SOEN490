import { NavigationProp, useRoute } from "@react-navigation/native";
import styles from "./IndividualTask.styles";
import { SafeAreaView } from "react-native";
import TopHeader from "../../../../navigation/TopHeader.component";
import { useThemeColor } from "../../../../hooks/useThemeColor";

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
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <TopHeader screenName={taskName} navigation={navigation} />
    </SafeAreaView>
  );
};
export default IndividualTask;
