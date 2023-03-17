import LabelledInputField from "./LabelledInputField.component";
import { render } from "@testing-library/react-native";
import LabelledInputFieldStyles from "./LabelledInputField.styles";

describe("LabelledInputField should render correctly", () => {
  it("should render the LabelledInputField without errors", () => {
    const { container } = render(
      <LabelledInputField
        labelTitle="TestTitle"
        placeHolder="testPlaceholder"
        styleBox={LabelledInputFieldStyles.InputField}
      />
    );

    expect(container).toBeTruthy();
  });

  it("should render the LabelledInputField the title and placeholder", () => {
    const { queryByText, queryByPlaceholderText } = render(
      <LabelledInputField
        labelTitle="TestTitle"
        placeHolder="testPlaceholder"
        styleBox={LabelledInputFieldStyles.InputField}
      />
    );

    expect(queryByText("TestTitle".toUpperCase())).not.toBeNull();
    expect(queryByPlaceholderText("testPlaceholder")).not.toBeNull();
  });
});
