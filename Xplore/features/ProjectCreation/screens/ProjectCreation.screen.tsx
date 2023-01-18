import _ from "lodash";
import React, { Component } from "react";
import { ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import { View, Wizard, Text, Toast } from "react-native-ui-lib";
import { Button, TopHeader } from "../../../components";
import Description from "./Description/screens/Description.screen";
import TechNGoals from "./TechNGoals/screens/TechNGoals.screen";
import AddLinks from "./AddLinks/screens/AddLinks.screen";
import { NavigationProp } from "@react-navigation/native";
import styles from "./ProjectCreation.styles";

interface State {
  activeIndex: number;
  completedStepIndex?: number;
  submissionMsg?: string;
}

interface HeaderProps {
  navigation: NavigationProp<any>;
}

export default class WizardScreen extends Component<{}, State, HeaderProps> {
  state = {
    activeIndex: 0,
    completedStepIndex: -1,
    submissionMsg: undefined,
  };

  onActiveIndexChanged = (activeIndex: number) => {
    this.setState({ activeIndex });
  };

  reset = () => {
    this.setState(
      {
        activeIndex: 0,
        completedStepIndex: -1,
        submissionMsg: "Project Created!",
      },
      () => {
        setTimeout(() => {
          this.setState({ submissionMsg: undefined });
        }, 2000);
      }
    );
  };

  goToPrevStep = () => {
    const { activeIndex: prevActiveIndex } = this.state;
    const activeIndex = prevActiveIndex === 0 ? 0 : prevActiveIndex - 1;

    this.setState({ activeIndex });
  };

  goToNextStep = () => {
    const {
      activeIndex: prevActiveIndex,
      completedStepIndex: prevCompletedStepIndex,
    } = this.state;

    const reset = prevActiveIndex === 4;

    if (reset) {
      this.reset();
      return;
    }

    const activeIndex = prevActiveIndex + 1;
    let completedStepIndex = prevCompletedStepIndex;
    if (!prevCompletedStepIndex || prevCompletedStepIndex < prevActiveIndex) {
      completedStepIndex = prevActiveIndex;
    }

    if (
      activeIndex !== prevActiveIndex ||
      completedStepIndex !== prevCompletedStepIndex
    ) {
      this.setState({ activeIndex, completedStepIndex });
    }
  };

  renderNextButton = () => {
    const { activeIndex } = this.state;

    return (
      <TouchableOpacity onPress={this.goToNextStep} style={styles.alignBtn}>
        <Button
          testID={"ProjectCreation_nextBtn"}
          backgroundColor="primary"
          children={activeIndex === 4 ? "SUBMIT" : "NEXT"}
          textColor="generalGray"
          style={styles.btn}
        />
      </TouchableOpacity>
    );
  };

  renderPrevButton = () => {
    return (
      <TouchableOpacity onPress={this.goToPrevStep} style={styles.alignBtn}>
        <Button
          testID={"ProjectCreation_prevBtn"}
          backgroundColor="backgroundSecondary"
          children="BACK"
          textColor="primary"
          style={styles.btn}
        />
      </TouchableOpacity>
    );
  };

  renderProjectCreation_Desc = () => {
    return (
      <View>
        <Description />
        {this.renderNextButton()}
      </View>
    );
  };

  renderProjectCreation_TechNGoals = () => {
    return (
      <View>
        <TechNGoals />
        {this.renderNextButton()}
        {this.renderPrevButton()}
      </View>
    );
  };

  renderProjectCreation_Tasks = () => {
    return (
      <View>
        <Text>TASKS SCREEN</Text>
        {this.renderNextButton()}
        {this.renderPrevButton()}
      </View>
    );
  };

  renderProjectCreation_AddMembers = () => {
    return (
      <View>
        <Text>ADD MEMBERS SCREEN</Text>
        {this.renderNextButton()}
        {this.renderPrevButton()}
      </View>
    );
  };

  renderProjectCreation_AddLinks = () => {
    return (
      <View>
        <AddLinks />
        {this.renderNextButton()}
        {this.renderPrevButton()}
      </View>
    );
  };

  renderCurrentStep = () => {
    const { activeIndex } = this.state;

    switch (activeIndex) {
      case 0:
      default:
        return this.renderProjectCreation_Desc();
      case 1:
        return this.renderProjectCreation_TechNGoals();
      case 2:
        return this.renderProjectCreation_Tasks();
      case 3:
        return this.renderProjectCreation_AddMembers();
      case 4:
        return this.renderProjectCreation_AddLinks();
    }
  };

  getStepState(index: number) {
    const { activeIndex } = this.state;

    if (index < activeIndex) {
      return Wizard.States.COMPLETED;
    } else if (index > activeIndex) {
      return Wizard.States.DISABLED;
    } else {
      return Wizard.States.ENABLED;
    }
  }

  render() {
    const { navigation } = this.props;
    const { activeIndex, submissionMsg } = this.state;

    return (
      <SafeAreaView style={styles.safeAreaStyle}>
        <ScrollView>
          <TopHeader
            title="Create Projects"
            icon1Name="search"
            icon1Color="primaryBackground"
            navigation={navigation}
          />
          <View style={styles.stepIndicator}>
            <Wizard
              containerStyle={styles.containerStyle}
              activeConfig={styles.activeConfigStyle}
              testID={"uilib.wizardAllTypes"}
              activeIndex={activeIndex}
              onActiveIndexChanged={this.onActiveIndexChanged}
            >
              <Wizard.Step state={this.getStepState(0)} label={"Description"} />
              <Wizard.Step
                state={this.getStepState(1)}
                label={"Tech & Goals"}
              />
              <Wizard.Step state={this.getStepState(2)} label={"Tasks"} />
              <Wizard.Step state={this.getStepState(3)} label={"Add Members"} />
              <Wizard.Step state={this.getStepState(4)} label={"Add Links"} />
            </Wizard>
          </View>
          {this.renderCurrentStep()}
        </ScrollView>
        {!_.isNil(submissionMsg) && (
          <Toast
            testID={"projectSubmissionMsg"}
            visible
            position="bottom"
            message={submissionMsg}
          />
        )}
      </SafeAreaView>
    );
  }
}
