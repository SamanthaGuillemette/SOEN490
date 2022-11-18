import styles from "../StepIndicator.styles";
import { useThemeColor } from "../../../hooks";
import { ShadowView } from "../../ShadowView";
import { Text } from "../../Text";

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
