import styles from "../StepIndicator.styles";
import { ShadowView } from "../../ShadowView";
import { Icon } from "../../Icon";
import { useThemeColor } from "../../../hooks";

const CompletedStep = () => {
  const success = useThemeColor("success");

  return (
    <ShadowView style={[styles.step, { borderColor: success }]}>
      <Icon name="check" color="success" />
    </ShadowView>
  );
};

export default CompletedStep;
