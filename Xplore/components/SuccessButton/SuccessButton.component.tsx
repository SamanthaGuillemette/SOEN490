import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Button, Icon } from "../";
import styles from "./SuccessButton.styles";
import { useState } from "react";
import { useThemeColor } from "../../hooks";

interface SuccessButtonProps extends TouchableOpacityProps {
  title: string;
  style?: StyleProp<ViewStyle>;
}

const SuccessButton = (props: SuccessButtonProps) => {
  const { title, style } = props;
  const [selected, setSelected] = useState(false);

  const primary = useThemeColor("primary");
  const bg = useThemeColor("primaryBackground");
  return (
    <View style={styles.alignBtn}>
      {selected === false ? (
        <Button
          style={styles.btn}
          backgroundColor="primaryBackground"
          textColor="primary"
          borderColor="primary"
          onPress={() => setSelected(!selected)}
        >
          {title}
        </Button>
      ) : (
        <TouchableOpacity
          style={[
            style,
            styles.btn,
            styles.check,
            { backgroundColor: bg, borderColor: primary },
          ]}
          onPress={() => setSelected(!selected)}
        >
          <Icon name="check-circle" color="primary" size="medium" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SuccessButton;
