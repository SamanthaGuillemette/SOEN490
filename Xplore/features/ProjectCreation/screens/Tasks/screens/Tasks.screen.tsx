import { SafeAreaView } from "react-native";
import styles from "./Tasks.styles";
import { Input } from "../components";

const Tasks = () => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <Input />
    </SafeAreaView>
  );
};

export default Tasks;