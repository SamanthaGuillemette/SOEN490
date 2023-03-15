import React from "react";
import { render, fireEvent } from "react-native-testing-library";
import { IntegrationCard } from "./IntegrationCard.component";

describe("IntegrationCard should render correctly", () => {
  it("should render the integration card title and description", () => {
    const { queryByTestId, queryByText } = render(
      <IntegrationCard
        title="TestingTitle"
        description="LoremIpsum"
        btnType="add"
        bgColor="white"
        iconName={""}
        testID="TestTestID"
      />
    );
    expect(queryByText("TestingTitle")).not.toBeNull();
    expect(queryByText("LoremIpsum")).not.toBeNull();
    expect(queryByTestId("TestTestID")).not.toBeNull();
  });

  it("should render the added button", () => {
    const { queryByTestId, queryByText } = render(
      <IntegrationCard
        title="TestingTitle"
        description="LoremIpsum"
        btnType="added"
        bgColor="white"
        iconName={""}
        testID="TestAddedID"
      />
    );
    expect(queryByText("TestingTitle")).not.toBeNull();
    expect(queryByText("LoremIpsum")).not.toBeNull();
    expect(queryByTestId("TestAddedID")).not.toBeNull();
  });

  it("should render the removed button", () => {
    const { queryByTestId, queryByText } = render(
      <IntegrationCard
        title="TestingTitle"
        description="LoremIpsum"
        btnType="removed"
        bgColor="white"
        iconName={""}
        testID="TestRemovedID"
      />
    );
    expect(queryByText("TestingTitle")).not.toBeNull();
    expect(queryByText("LoremIpsum")).not.toBeNull();
    expect(queryByTestId("TestRemovedID")).not.toBeNull();
  });

  it("should render a blue background", () => {
    const { queryByTestId, queryByText } = render(
      <IntegrationCard
        title="TestingTitle"
        description="LoremIpsum"
        btnType="removed"
        bgColor="blue"
        iconName={""}
        testID="TestblueID"
      />
    );
    expect(queryByText("TestingTitle")).not.toBeNull();
    expect(queryByText("LoremIpsum")).not.toBeNull();
    expect(queryByTestId("TestblueID")).not.toBeNull();
  });
});

describe("IntegrationCard should be editable", () => {
  it("should be editable for the add button", () => {
    const { queryByTestId, queryByText, getByText } = render(
      <IntegrationCard
        title="TestingTitle"
        description="LoremIpsum"
        btnType="add"
        bgColor="blue"
        iconName={""}
        editableIntegration={true}
      />
    );
    expect(queryByText("TestingTitle")).not.toBeNull();
    expect(queryByText("LoremIpsum")).not.toBeNull();
    expect(queryByTestId("test")).not.toBeNull();
    fireEvent.press(getByText("ADD"));
  });

  it("should be editable for the added button", () => {
    const { queryByTestId, queryByText, getByText } = render(
      <IntegrationCard
        title="TestingTitle"
        description="LoremIpsum"
        btnType="added"
        bgColor="blue"
        iconName={""}
        editableIntegration={true}
      />
    );
    expect(queryByText("TestingTitle")).not.toBeNull();
    expect(queryByText("LoremIpsum")).not.toBeNull();
    expect(queryByTestId("test")).not.toBeNull();
    fireEvent.press(getByText("ADDED"));
  });

  it("should be editable for the removed button", () => {
    const { queryByTestId, queryByText, getByText } = render(
      <IntegrationCard
        title="TestingTitle"
        description="LoremIpsum"
        btnType="removed"
        bgColor="blue"
        iconName={""}
        editableIntegration={true}
      />
    );
    expect(queryByText("TestingTitle")).not.toBeNull();
    expect(queryByText("LoremIpsum")).not.toBeNull();
    expect(queryByTestId("test")).not.toBeNull();
    fireEvent.press(getByText("REMOVED"));
  });
});
