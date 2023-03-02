import _ from "lodash";
import { Wizard, Toast } from "react-native-ui-lib";
import { Button } from "../Button";
import { TopHeader } from "../TopHeader";
import { NavigationProp } from "@react-navigation/native";
import styles from "./StepIndicator.styles";
import { useThemeColor } from "../../hooks";
import { useState } from "react";
import { ScrollView, View as RNView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "../View";

interface StepIndicatorProps {
  headerTitle: string;
  numOfSteps: number;
  stepLabels: Array<String>;
  screens: Array<JSX.Element>;
  onSubmitMsg: string;
  navigation: NavigationProp<any>;
}

export const StepIndicator = (props: StepIndicatorProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [completedStepIndex, setCompletedStepIndex] = useState(-1);
  const [submissionMsg, setSubmissionMsg] = useState("");
  const bodyText = useThemeColor("bodyText");
  const primary = useThemeColor("primary");
  const success = useThemeColor("success");
  const generalGray = useThemeColor("generalGray");
  const primaryBackgroundOpaque = useThemeColor("primaryBackgroundOpaque");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const background = useThemeColor("background");
  const {
    navigation,
    headerTitle,
    numOfSteps,
    stepLabels,
    screens,
    onSubmitMsg,
  } = props;

  const onActiveIndexChanged = (activeInd: number) => {
    setActiveIndex(activeInd);
  };

  const reset = () => {
    setActiveIndex(0);
    setCompletedStepIndex(-1);
    setSubmissionMsg(onSubmitMsg);
    setTimeout(() => {
      setSubmissionMsg("");
    }, 2000);
  };

  const goToNextStep = () => {
    let prevActiveIndex = activeIndex;
    let prevCompletedStepIndex = completedStepIndex;

    const resetIndex = prevActiveIndex === numOfSteps - 1;

    if (resetIndex) {
      reset();
      return;
    }

    let newActiveIndex = prevActiveIndex + 1;
    let newCompletedStepIndex = prevCompletedStepIndex;

    if (!prevCompletedStepIndex || prevCompletedStepIndex < prevActiveIndex) {
      newCompletedStepIndex = prevActiveIndex;
    }

    if (
      newActiveIndex !== prevActiveIndex ||
      newCompletedStepIndex !== prevCompletedStepIndex
    ) {
      setActiveIndex(newActiveIndex);
      setCompletedStepIndex(newCompletedStepIndex);
    }
  };

  const goToPrevStep = () => {
    let prevActiveIndex = activeIndex;
    let newActiveIndex = prevActiveIndex === 0 ? 0 : prevActiveIndex - 1;

    setActiveIndex(newActiveIndex);
  };

  const renderNextButton = () => {
    return (
      <View style={styles.alignBtn}>
        <Button
          backgroundColor="primary"
          children={activeIndex === numOfSteps - 1 ? "SUBMIT" : "NEXT"}
          textColor="generalGray"
          borderColor="primary"
          style={styles.btn}
          onPress={goToNextStep}
        />
      </View>
    );
  };

  const renderCancelButton = () => {
    return (
      <View style={styles.alignBtn}>
        <Button
          backgroundColor="backgroundSecondary"
          children="CANCEL"
          textColor="primary"
          borderColor="primary"
          style={styles.btn}
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  };

  const renderCurrentStep = () => {
    return (
      <View>
        {screens[activeIndex]}
        {renderNextButton()}
        {renderCancelButton()}
      </View>
    );
  };

  const getStepState = (index: number) => {
    if (index < activeIndex) {
      return Wizard.States.COMPLETED;
    } else if (index > activeIndex) {
      return Wizard.States.DISABLED;
    } else {
      return Wizard.States.ENABLED;
    }
  };

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: background }}
      >
        <TopHeader
          title={headerTitle}
          icon1Name="search"
          icon1Color="primaryBackground"
          navigation={activeIndex === 0 ? navigation : goToPrevStep}
        />
        <View style={styles.stepIndicator}>
          <Wizard
            containerStyle={styles.containerStyle}
            activeConfig={{ circleColor: bodyText, color: primary }}
            testID={"uilib.wizardAllTypes"}
            activeIndex={activeIndex}
            onActiveIndexChanged={onActiveIndexChanged}
          >
            {_.times(numOfSteps, (i) => {
              return (
                <Wizard.Step
                  state={getStepState(i)}
                  label={stepLabels[i]}
                  circleBackgroundColor={backgroundSecondary}
                  circleSize={36}
                  circleColor={
                    activeIndex === i
                      ? bodyText
                      : activeIndex > i
                      ? success
                      : generalGray
                  }
                  color={
                    activeIndex === i
                      ? primary
                      : activeIndex > i
                      ? success
                      : primaryBackgroundOpaque
                  }
                />
              );
            })}
          </Wizard>
        </View>
        {renderCurrentStep()}
        <RNView style={styles.spacingBottom} />
      </ScrollView>
      {!_.isNil(submissionMsg) && (
        <Toast
          testID={"projectSubmissionMsg"}
          visible={submissionMsg === "" ? false : true}
          position="bottom"
          message={submissionMsg}
          style={[
            {
              backgroundColor: primary,
            },
            styles.spacingToast,
          ]}
        />
      )}
    </SafeAreaView>
  );
};

export default StepIndicator;
