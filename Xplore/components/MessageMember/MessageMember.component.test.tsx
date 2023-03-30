import { render } from "react-native-testing-library";
import React from "react";
import { MessageMember } from "./MessageMember.component";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

describe("Member should render correctly", () => {
  it("should render correctly with the username", () => {
    const { queryByText } = render(
      <QueryClientProvider client={queryClient}>
        <MessageMember
          avatar="TestAvatar"
          username="TestUsername"
          xp={20}
          id="1234"
        />
      </QueryClientProvider>
    );
    expect(queryByText("TestUsername")).not.toBeNull();
  });
});
