import { View } from "react-native";
import { useThemeColor } from "../../hooks";
import styles from "./StepIndicator.styles";
import { ShadowView, Text, Icon } from "../index";
interface StepIndicatorProps {
  firstStep: "inactive" | "active" | "completed";
  secondStep: "inactive" | "active" | "completed";
  thirdStep: "inactive" | "active" | "completed";
}

const StepIndicator = (props: StepIndicatorProps) => {
  const bodyText = useThemeColor("bodyText");
  const primary = useThemeColor("primary");
  const primaryBackgroundOpaque = useThemeColor("primaryBackgroundOpaque");
  const generalGray = useThemeColor("generalGray");
  const success = useThemeColor("success");
  const { firstStep } = props;

  return (
    <View style={[styles.container, styles.extraDesign]}>
      {firstStep === "inactive" ? "" : <CompletedStep />}
    </View>
  );
};

export default StepIndicator;
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

const CompletedStep = () => {
  const success = useThemeColor("success");

  return (
    <ShadowView style={[styles.step, { borderColor: success }]}>
      <Icon name="check" color="success" />
    </ShadowView>
  );
};

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
