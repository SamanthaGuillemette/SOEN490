import { render } from "@testing-library/react-native";
import { Platform } from "react-native";
import { BrandIcon } from "./BrandIcon.component";

const BrandIconTest = {
  name: "figma",
};

const setPlatform = function (platform: "android" | "ios") {
  Object.defineProperty(Platform, "OS", {
    get: jest.fn(() => platform),
  });
};

describe("Testing <BrandIcon /> component: ", () => {
  it("renders correctly", () => {
    const { container } = render(<BrandIcon name="github" />);
    expect(container).toBeTruthy();
  });

  it("renders matching object for prop", () => {
    const { container } = render(<BrandIcon name="figma" />);
    expect(container.props).toMatchObject(BrandIconTest);
  });
});

describe("Testing different sizes for the brandIcon", () => {
  it("should render in small", () => {
    const { container } = render(<BrandIcon name="github" size="small" />);
    expect(container).toBeTruthy();
  });

  it("should render in medium", () => {
    const { container } = render(<BrandIcon name="github" size="medium" />);
    expect(container).toBeTruthy();
  });

  it("should render in large", () => {
    const { container } = render(<BrandIcon name="github" size="large" />);
    expect(container).toBeTruthy();
  });
});

describe("Testing different sizes for the brandIcon for android", () => {
  it("should render in small", () => {
    setPlatform("android");
    const { container } = render(<BrandIcon name="github" size="small" />);
    expect(container).toBeTruthy();
  });

  it("should render in medium", () => {
    setPlatform("android");
    const { container } = render(<BrandIcon name="github" size="medium" />);
    expect(container).toBeTruthy();
  });

  it("should render in large", () => {
    setPlatform("android");
    const { container } = render(<BrandIcon name="github" size="large" />);
    expect(container).toBeTruthy();
  });
});

describe("Testing BrandIcon with a custom color", () => {
  it("should render with a custom color", () => {
    const { container } = render(
      <BrandIcon name="github" customColor="blue" />
    );
    expect(container).toBeTruthy();
  });
});
