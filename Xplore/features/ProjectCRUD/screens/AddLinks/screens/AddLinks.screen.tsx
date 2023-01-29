import { SafeAreaView } from "react-native";
import styles from "./AddLinks.styles";
import { Integration } from "../components";

const AddLinks = () => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <Integration />
    </SafeAreaView>
  );
};

export default AddLinks;
