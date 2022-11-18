import styles from "../StepIndicator.styles";
import { ShadowView, Text } from "../../index";
import { useThemeColor } from "../../../hooks";

interface InactiveStepProps {
  stepNumber: number;
}

const InactiveStep = (props: InactiveStepProps) => {
  const primaryBackgroundOpaque = useThemeColor("primaryBackgroundOpaque");
  const generalGray = useThemeColor("generalGray");

  return (
    <ShadowView style={[styles.step, { borderColor: generalGray }]}>
      <Text style={{ color: primaryBackgroundOpaque }}>{props.stepNumber}</Text>
    </ShadowView>
  );
};

export default InactiveStep;
