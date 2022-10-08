import { View as RNView } from "react-native";

interface ViewProps {
  children: React.ReactNode;
}

const View = (props: ViewProps) => {
  return <RNView>{props.children}</RNView>;
};

export default View;
