import styles from "../StepIndicator.styles";
import { ShadowView, Text } from "../../index";
import { useThemeColor } from "../../../hooks";

interface ActiveStepProps {
  stepNumber: number;
}

const ActiveStep = (props: ActiveStepProps) => {
  const bodyText = useThemeColor("bodyText");
  const primary = useThemeColor("primary");

  return (
    <ShadowView style={[styles.step, { borderColor: bodyText }]}>
      <Text style={{ color: primary }}>{props.stepNumber}</Text>
    </ShadowView>
  );
};

export default ActiveStep;
