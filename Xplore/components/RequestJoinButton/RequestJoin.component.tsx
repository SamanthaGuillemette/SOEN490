import { useState } from "react";
import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useThemeColor } from "../../hooks";
import { View } from "../View";
import { Text } from "../Text";
import styles from "./RequestJoin.styles";

interface RequestJoinProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
}

export const RequestJoin = (props: RequestJoinProps) => {
  const { style } = props;
  const [clicked, setClicked] = useState(false);

  const primary = useThemeColor("primary");
  const success = useThemeColor("success");
  const bg = useThemeColor("background");

  return (
    <View>
      {clicked === false ? (
        <TouchableOpacity
          style={[
            style,
            styles.button,
            { backgroundColor: bg, borderColor: primary },
          ]}
          onPress={() => setClicked(!clicked)}
        >
          <Text variant="label" style={[styles.textStyle, { color: primary }]}>
            REQUEST JOIN
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[
            style,
            styles.button,
            { backgroundColor: bg, borderColor: success },
          ]}
          onPress={() => setClicked(!clicked)}
        >
          <Text variant="label" style={[styles.textStyle, { color: success }]}>
            REQUEST SENT
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
