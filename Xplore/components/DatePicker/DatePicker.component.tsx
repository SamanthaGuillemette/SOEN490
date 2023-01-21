import { Text } from "../Text/Text.component";
import { useThemeColor } from "../../hooks";
import { StyleProp, ViewStyle } from "react-native";
import { DatePickerModal } from "react-native-paper-dates";
import { DateTimePicker, View } from "react-native-ui-lib";
import { Button, Chip } from "react-native-paper";
import { useState } from "react";
import styles from "./DatePicker.styles";
import React from "react"; /////////////////////////

interface DatePickerProps {
  title: string;
  style?: StyleProp<ViewStyle>;
}

export const DatePicker = (props: DatePickerProps) => {
  const { title, style } = props;
  const [date, setDate] = useState(new Date());
  const [range, setRange] = React.useState({
    startDate: undefined,
    endDate: undefined,
  });

  const [open, setOpen] = React.useState(false);

  const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = React.useCallback(
    ({ startDate, endDate }) => {
      setOpen(false);
      setRange({ startDate, endDate });
    },
    [setOpen, setRange]
  );

  const bodyText = useThemeColor("bodyText");

  return (
    <View style={[style, styles.padding]}>
      <Text color="titleText" variant="h3">
        {title}
      </Text>

      {/*
      <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
        <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
          Pick range
        </Button>
        <DatePickerModal
          locale="en"
          mode="range"
          visible={open}
          onDismiss={onDismiss}
          startDate={range.startDate}
          endDate={range.endDate}
          onConfirm={onConfirm}
          startYear={2023}
        />
      </View>
      */}

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
