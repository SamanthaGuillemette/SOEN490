import { InputField } from "../../../components";
import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

const Test = () => {
  return (
    <InputField
      textColor={"background"}
      style={styles.Box}
      lightBorderColor={colors.light.backgroundSecondary}
    >
      Test
    </InputField>
  );
};

export default Test;

const styles = StyleSheet.create({
  Box: {
    width: 50,
    height: 50,
  },
});
