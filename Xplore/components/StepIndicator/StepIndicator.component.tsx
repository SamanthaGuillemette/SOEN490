import { View } from "react-native";
import CompletedStep from "./components/CompletedStep.component";
import { useThemeColor } from "../../hooks";
import styles from "./StepIndicator.styles";

interface stepArray {
  firstStep: "inactive" | "active" | "completed";
  secondStep: "inactive" | "active" | "completed";
  thirdStep: "inactive" | "active" | "completed";
}

interface StepIndicatorProps {
  stepTypes: stepArray;
}

const StepIndicator = (props: StepIndicatorProps) => {
  const bodyText = useThemeColor("bodyText");
  const primary = useThemeColor("primary");
  const primaryBackgroundOpaque = useThemeColor("primaryBackgroundOpaque");
  const generalGray = useThemeColor("generalGray");
  const success = useThemeColor("success");
  const { stepTypes } = props;

  return (
    <View style={[styles.container, styles.extraDesign]}>
      {stepTypes.firstStep === "inactive" ? "" : <CompletedStep />}
    </View>
  );
};

export default StepIndicator;
