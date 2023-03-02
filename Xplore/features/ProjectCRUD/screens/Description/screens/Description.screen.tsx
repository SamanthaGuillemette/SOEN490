import { View } from "react-native";
import styles from "./Description.styles";
import { EditImage, Input } from "../components";

const Description = () => {
  return (
    <View style={styles.container}>
      <EditImage />
      <Input />
    </View>
  );
};

export default Description;
