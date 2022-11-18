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
      <StepIndicator />
    </SafeAreaView>
  );
};

export default Description;

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
});
