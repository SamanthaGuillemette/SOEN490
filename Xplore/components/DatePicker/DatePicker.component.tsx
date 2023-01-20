import { Text } from "../Text/Text.component";
import { useThemeColor } from "../../hooks";
import { StyleProp, ViewStyle } from "react-native";
import { DateTimePicker, View } from "react-native-ui-lib";
import { useState } from "react";
import styles from "./DatePicker.styles";

interface DatePickerProps {
  title: string;
  style?: StyleProp<ViewStyle>;
}

export const DatePicker = (props: DatePickerProps) => {
  const { title, style } = props;
  const [date, setDate] = useState(new Date());
  const bodyText = useThemeColor("bodyText");

  return (
    <View style={[style, styles.padding]}>
      <Text color="titleText" variant="h3">
        {title}
      </Text>

      <DateTimePicker
        label={"Date"}
        placeholder={"Select a date"}
        dateFormat={"D-MMM-YYYY"}
        onChange={(Date: any) => setDate(Date)}
        style={[
          {
            color: bodyText,
          },
          styles.textStyle,
        ]}
      />
    </View>
  );
};
