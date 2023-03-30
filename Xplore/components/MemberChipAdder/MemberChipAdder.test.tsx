import { MemberChipAdder } from "./MemberChipAdder.component";
import { fireEvent, render } from "@testing-library/react-native";

jest.mock("react-query", () => ({
  useQuery: jest.fn().mockReturnValue([
    {
      data: [
        {
          userdata: {
            $createdAt: "2023-02-06T18:20:49.212+00:00",
            $id: "testId",
            $updatedAt: "2023-03-05T22:59:11.210+00:00",
            email: "test@mail.com",
            emailVerification: true,
            name: "Test User",
            passwordUpdate: "2023-03-05T22:59:11.210+00:00",
            phone: "",
            phoneVerification: false,
            prefs: { from: "Montreal, QC" },
            registration: "2023-02-06T18:20:49.212+00:00",
            status: true,
          },
        },
      ],
    },
  ]),
}));

describe("MemberChipAdder component should render correctly", () => {
  it("should render correctly", () => {
    const { container } = render(<MemberChipAdder />);
    expect(container).toBeTruthy();
  });
});

describe("MemberChipAdder component should render the plus icon", () => {
  it("should have a plus icon", () => {
    const { queryByTestId } = render(<MemberChipAdder />);
    expect(queryByTestId("plus")).not.toBeNull();
  });
});

describe("MemberChipAdder component should render the add member modal", () => {
  it("should render the add member modal after clicking the plus icon", () => {
    const { getByTestId, queryByText, queryByTestId } = render(
      // <QueryClientProvider client={q}>
      <MemberChipAdder />
      // </QueryClientProvider>
    );
    expect(queryByText("Add new members")).toBeNull();
    expect(queryByText("ADD")).toBeNull();
    expect(queryByText("Cancel")).toBeNull();
    expect(queryByTestId("plus")).not.toBeNull();
    fireEvent.press(getByTestId("plus"));
    expect(queryByText("Add new members")).not.toBeNull();
    expect(queryByText("ADD")).not.toBeNull();
    expect(queryByText("Cancel")).not.toBeNull();
  });
});
