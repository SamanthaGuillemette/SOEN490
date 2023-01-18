import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
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

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
});
