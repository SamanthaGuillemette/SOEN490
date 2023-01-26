import { SafeAreaView } from "react-native";
import styles from "./Tasks.styles";
import { Input } from "../components";
import SuccessButton from "../../../../../components/SuccessButton/SuccessButton.component";

const Tasks = () => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <Input />
      <SuccessButton title="ADD" />
    </SafeAreaView>
  );
};

export default Tasks;
