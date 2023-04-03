import StepIndicator from "./StepIndicator.component";
import { render, fireEvent } from "@testing-library/react-native";
import {
  AddLinks,
  AddMembers,
  AllTasks,
  Description,
  CategoryNGoals,
} from "../../features/ProjectCRUD/components";
import { NavigationProp } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "react-query";

const useQuery = new QueryClient();
const nav = jest.fn<NavigationProp<any>, any>();
const setGoals = jest.fn();

describe("StepIndicator component should render correctly", () => {
  it("Should render the step indicator", () => {
    const { container } = render(
      <QueryClientProvider client={useQuery}>
        <StepIndicator
          headerTitle={"TestTitle"}
          numOfSteps={5}
          onSubmitMsg="TestSubmitMessage"
          screens={[
            <Description />,
            <CategoryNGoals setGoals={setGoals} />,
            <AllTasks />,
            <AddMembers />,
            <AddLinks />,
          ]}
          navigation={{ nav }}
          stepLabels={["screen1", "screen2", "screen3", "screen4"]}
        />
      </QueryClientProvider>
    );
    expect(container).toBeTruthy();
  });

  it("Should render the step indicator title", () => {
    const { queryByText } = render(
      <QueryClientProvider client={useQuery}>
        <StepIndicator
          headerTitle={"TestTitle"}
          numOfSteps={5}
          onSubmitMsg="TestSubmitMessage"
          screens={[
            <Description />,
            <CategoryNGoals setGoals={setGoals} />,
            <AllTasks />,
            <AddMembers />,
            <AddLinks />,
          ]}
          navigation={{ nav }}
          stepLabels={["screen1", "screen2", "screen3", "screen4"]}
        />
      </QueryClientProvider>
    );
    expect(queryByText("TestTitle")).not.toBeNull();
  });

  it("Should be scrollable", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={useQuery}>
        <StepIndicator
          headerTitle={"TestTitle"}
          numOfSteps={5}
          onSubmitMsg="TestSubmitMessage"
          screens={[
            <Description />,
            <CategoryNGoals setGoals={setGoals} />,
            <AllTasks />,
            <AddMembers />,
            <AddLinks />,
          ]}
          navigation={{ nav }}
          stepLabels={["screen1", "screen2", "screen3", "screen4"]}
        />
      </QueryClientProvider>
    );
    fireEvent.scroll(getByTestId("ScrollViewTest"));
  });

  it("Should be able to click next 4 times", () => {
    const handleSubmit = jest.fn();
    const { getByText } = render(
      <QueryClientProvider client={useQuery}>
        <StepIndicator
          headerTitle={"TestTitle"}
          numOfSteps={5}
          onSubmitMsg="TestSubmitMessage"
          screens={[
            <Description />,
            <Description />,
            <Description />,
            <Description />,
            <Description />,
          ]}
          navigation={{ nav }}
          stepLabels={["screen1", "screen2", "screen3", "screen4"]}
          handleSubmit={handleSubmit}
        />
      </QueryClientProvider>
    );
    fireEvent.press(getByText("NEXT"));
    fireEvent.press(getByText("NEXT"));
    fireEvent.press(getByText("NEXT"));
    fireEvent.press(getByText("NEXT"));
    fireEvent.press(getByText("SUBMIT")); //submit after all steps
    expect(handleSubmit).toBeCalledTimes(1);
  });

  it("Should be able to cancel", () => {
    const handleSubmit = jest.fn();
    const nav2 = { goBack: jest.fn() };
    const { getByText } = render(
      <QueryClientProvider client={useQuery}>
        <StepIndicator
          headerTitle={"TestTitle"}
          numOfSteps={5}
          onSubmitMsg="TestSubmitMessage"
          screens={[
            <Description />,
            <Description />,
            <Description />,
            <Description />,
            <Description />,
          ]}
          navigation={nav2}
          stepLabels={["screen1", "screen2", "screen3", "screen4"]}
          handleSubmit={handleSubmit}
        />
      </QueryClientProvider>
    );
    fireEvent.press(getByText("CANCEL"));
    expect(nav2.goBack).toBeCalledTimes(1);
  });
});
