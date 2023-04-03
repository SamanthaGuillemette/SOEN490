import { fireEvent, render } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import Profile from "./Profile.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as userDet from "../../hooks/useFetchUserDetails";

const navigation = { navigate: jest.fn() };
const item = {
  name: "TestUser",
  description: "TestDescription",
  percentComplete: 1,
};
const data = {
  username: "TestUser",
  xp: 20,
  projects: [1, 2, 3, 4, 5],
};
const useQuery = new QueryClient();

const Stack = createNativeStackNavigator();

// Wrap test component in navigation container
function ProfileWithNavigation() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={useQuery}>
        <Profile navigation={navigation} item={item} />
      </QueryClientProvider>
    </NavigationContainer>
  );
}

describe("Profile should render", () => {
  it("should render correctly", () => {
    const { container } = render(<ProfileWithNavigation />);
    expect(container).toBeTruthy();
  });

  it("should not be in loading status", () => {
    jest
      .spyOn(userDet, "useFetchUserDetails")
      .mockReturnValue({ data: data, status: "success" });
    const { queryByText } = render(<ProfileWithNavigation />);
    expect(queryByText("TestUser")).not.toBeNull();
  });

  it("should be able to navigate", () => {
    jest
      .spyOn(userDet, "useFetchUserDetails")
      .mockReturnValue({ data: data, status: "success" });
    const { getByTestId } = render(<ProfileWithNavigation />);
    fireEvent.press(getByTestId("settings"));
    fireEvent.press(getByTestId("bell"));
    expect(navigation.navigate).toBeCalledTimes(2);
  });
});
