import { fireEvent, render, screen } from "@testing-library/react-native";
import { TextInput } from "./TextInput.component";

describe("Unit testing <TextInput />:", () => {
  it("renders correctly", () => {
    const TextInputComponent = render(
      <TextInput iconName="clock" placeHolder="myPlaceHolder" />
    );
    expect(
      TextInputComponent.getByPlaceholderText("myPlaceHolder")
    ).toBeTruthy();
  });

  it("renders correctly with secureTextEntry", () => {
    render(
      <TextInput iconName="clock" placeHolder="myPlaceHolder" secureTextEntry />
    );
    const TextInputComponent = screen.getByPlaceholderText("myPlaceHolder");
    expect(TextInputComponent.props).toHaveProperty("secureTextEntry", true);
  });

  it("renders with correct placeholder text color", () => {
    const { getByPlaceholderText } = render(
      <TextInput iconName="clock" placeHolder="myPlaceHolder" />
    );
    const TextInputComponent = getByPlaceholderText("myPlaceHolder");

    expect(TextInputComponent.props).toHaveProperty(
      "placeholderTextColor",
      "#585757"
    );
  });

  it("should display correct input text", () => {
    const mockFn = jest.fn();
    render(
      <TextInput
        // @ts-ignore
        onChangeText={mockFn}
        iconName="clock"
        placeHolder="myPlaceHolder"
      />
    );
    const TextInputComponent = screen.getByPlaceholderText("myPlaceHolder");

    fireEvent.changeText(TextInputComponent, "myInputText");
    expect(mockFn).toHaveBeenCalledWith("myInputText");
  });
});
