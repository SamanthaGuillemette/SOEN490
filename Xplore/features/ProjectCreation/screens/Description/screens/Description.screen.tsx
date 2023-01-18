import { SafeAreaView } from "react-native";
import styles from "./Description.styles";
import { EditImage, Input } from "../components";

const Description = () => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <EditImage />
      <Input />
    </SafeAreaView>
  );
};

export default Description;
