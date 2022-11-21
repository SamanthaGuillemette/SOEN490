import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { TopHeader, StepIndicator } from "../../../../components";
import { NavigationProp } from "@react-navigation/native";
import EditImage from "../components/EditImage";
import Input from "../components/Input";
interface DescriptionProps {
  navigation: NavigationProp<any>;
}

const Description = (props: DescriptionProps) => {
  const { navigation } = props;

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <TopHeader
        title="Create Projects"
        icon1Name="search"
        icon1Color="primaryBackground"
        navigation={navigation}
      />
      <StepIndicator
        stepNumber={[1, 2, 3]}
        title="Description"
        titleLevel={1}
        stepTypes={["active", "inactive", "inactive"]}
      />
      <EditImage />
      <Input />
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
