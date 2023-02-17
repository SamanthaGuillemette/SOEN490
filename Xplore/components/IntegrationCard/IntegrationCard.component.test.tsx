import React from "react";
import { render } from "react-native-testing-library";
import { IntegrationCard } from "./IntegrationCard.component";

describe("IntegrationCard should render", () => {
  it("should render the integration card title and description", () => {
    const { queryByText } = render(
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
  });
});
