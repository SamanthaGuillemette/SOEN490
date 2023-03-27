import StepIndicator from "./StepIndicator.component";
import { render, fireEvent } from "@testing-library/react-native";
import {
  AddLinks,
  AddMembers,
  AllTasks,
  Description,
  TechNGoals,
} from "../../features/ProjectCRUD/components";
import { NavigationProp } from "@react-navigation/native";

describe("StepIndicator component should render correctly", () => {
  it("Should render the step indicator", () => {
    const nav = jest.fn<NavigationProp<any>, any>();
    const { container } = render(
      <StepIndicator
        headerTitle={"TestTitle"}
        numOfSteps={5}
        onSubmitMsg="TestSubmitMessage"
        screens={[
          <Description />,
          <TechNGoals />,
          <AllTasks />,
          <AddMembers />,
          <AddLinks />,
        ]}
        navigation={{ nav }}
        stepLabels={["screen1", "screen2"]}
      />
    );
    expect(container).toBeTruthy();
  });

  it("Should render the step indicator title", () => {
    const nav = jest.fn<NavigationProp<any>, any>();
    const { queryByText } = render(
      <StepIndicator
        headerTitle={"TestTitle"}
        numOfSteps={5}
        onSubmitMsg="TestSubmitMessage"
        screens={[
          <Description />,
          <TechNGoals />,
          <AllTasks />,
          <AddMembers />,
          <AddLinks />,
        ]}
        navigation={{ nav }}
        stepLabels={["screen1", "screen2"]}
      />
    );
    expect(queryByText("TestTitle")).not.toBeNull();
  });

  it("Should be scrollable", () => {
    const nav = jest.fn<NavigationProp<any>, any>();
    const { getByTestId } = render(
      <StepIndicator
        headerTitle={"TestTitle"}
        numOfSteps={5}
        onSubmitMsg="TestSubmitMessage"
        screens={[
          <Description />,
          <TechNGoals />,
          <AllTasks />,
          <AddMembers />,
          <AddLinks />,
        ]}
        navigation={{ nav }}
        stepLabels={["screen1", "screen2"]}
      />
    );
    fireEvent.scroll(getByTestId("ScrollViewTest"));
  });
});
