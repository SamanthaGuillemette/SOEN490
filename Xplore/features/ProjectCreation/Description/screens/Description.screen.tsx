import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Header, StepIndicator } from "../../../../components";
import { NavigationProp } from "@react-navigation/native";

interface DescriptionProps {
  navigation: NavigationProp<any>;
}

const Description = (props: DescriptionProps) => {
  const { navigation } = props;

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <Header
        title="Create Projects"
        icon1Name="search"
        icon1Color="primaryBackground"
        navigation={navigation}
      />
      <StepIndicator
        stepNumber={[0, 1, 2]}
        title="Description"
        titleLevel={2}
        stepTypes={["inactive", "active", "completed"]}
      />
    </SafeAreaView>
  );
};

export default Description;

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
  line: {
    width: 34,
    height: 1,
    marginTop: 18,
  },
});
