import { StyleSheet, View } from "react-native";
import { ShadowView, Text, Icon, StepIndicator } from "../../../../components";
import { useThemeColor } from "../../../../hooks";

const Test = () => {
  const bodyText = useThemeColor("bodyText");
  const primary = useThemeColor("primary");
  const primaryBackgroundOpaque = useThemeColor("primaryBackgroundOpaque");
  const generalGray = useThemeColor("generalGray");
  const success = useThemeColor("success");

  return;
};

export default Test;

const styles = StyleSheet.create({
  extraDesign: {
    marginTop: 52,
  },
  container: {
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  line: {
    width: 34,
    height: 1,
    marginTop: 18,
  },
  step: {
    width: 36,
    height: 36,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});
