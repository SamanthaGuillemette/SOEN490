import { useThemeColor } from "../../../hooks";
import styles from "../StepIndicator.styles";
import { Text } from "../../Text";
import { View } from "react-native";

interface StepLabelProps {
  title?: string;
}

const StepLabel = (props: StepLabelProps) => {
  const primary = useThemeColor("primary");
  const generalGray = useThemeColor("generalGray");
  const { title } = props;

  return title ? (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={[styles.line, { backgroundColor: generalGray }]} />
      <Text variant="label" style={{ color: primary, marginTop: 8 }}>
        {title}
      </Text>
      <View style={[styles.line, { backgroundColor: generalGray }]} />
    </View>
  ) : (
    <View style={[styles.line, { flex: 1, backgroundColor: generalGray }]} />
  );
};

export default StepLabel;
