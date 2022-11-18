import styles from "./StepIndicator.styles";
import InactiveStep from "./components/InactiveStep";
import CompletedStep from "./components/CompletedStep";
import ActiveStep from "./components/ActiveStep";
import StepLabel from "./components/StepLabel";
import { View } from "react-native";

interface StepIndicatorProps {
  stepTypes: ("inactive" | "active" | "completed")[];
  title: string;
  titleLevel: 1 | 2;
  stepNumber: number[];
}

export const StepIndicator = (props: StepIndicatorProps) => {
  const { stepTypes, stepNumber, title, titleLevel } = props;

  return (
    <View style={[styles.container, { marginTop: 52 }]}>
      {stepTypes[0] === "inactive" ? (
        <InactiveStep stepNumber={stepNumber[0]} />
      ) : stepTypes[0] === "active" ? (
        <ActiveStep stepNumber={stepNumber[0]} />
      ) : (
        <CompletedStep />
      )}

      {titleLevel === 1 ? <StepLabel title={title} /> : <StepLabel />}

      {stepTypes[1] === "inactive" ? (
        <InactiveStep stepNumber={stepNumber[1]} />
      ) : stepTypes[1] === "active" ? (
        <ActiveStep stepNumber={stepNumber[1]} />
      ) : (
        <CompletedStep />
      )}

      {titleLevel === 2 ? <StepLabel title={title} /> : <StepLabel />}

      {stepTypes[3] === "inactive" ? (
        <InactiveStep stepNumber={stepNumber[2]} />
      ) : stepTypes[3] === "active" ? (
        <ActiveStep stepNumber={stepNumber[2]} />
      ) : (
        <CompletedStep />
      )}
    </View>
  );
};

export default StepIndicator;
