import { Text } from "../Text/Text.component";
import { useThemeColor } from "../../hooks";
import { StyleProp, ViewStyle } from "react-native";
import styles from "./DatePicker.styles";
import { Icon } from "../Icon/Icon.component";
import { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import Modal from "react-native-modal";
import { Calendar } from "react-native-calendars";
interface DatePickerProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  defaultDate?: string;
  setDate: (date: string) => void;
  shouldDisplayDate?: boolean;
}

export const DatePicker = (props: DatePickerProps) => {
  const [tempDate, setTempDate] = useState(
    props.defaultDate === undefined ? "YYYY-MM-DD" : props.defaultDate
  );
  const [openCalendar, setOpenCalendar] = useState(false);
  const primary = useThemeColor("primary");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const primaryBackgroundOpaque = useThemeColor("primaryBackgroundOpaque");
  const titleText = useThemeColor("titleText");
  const generalGray = useThemeColor("generalGray");
  const { title, style, setDate, shouldDisplayDate } = props;

  return (
    <View>
      <View style={[style, styles.padding]}>
        <Text color="titleText" variant="h3">
          {title}
        </Text>

        <View style={styles.alignRow}>
          <Text color="bodyText" variant="label">
            {shouldDisplayDate === true ? tempDate : "YYYY-MM-DD"}
          </Text>

          <TouchableWithoutFeedback
            onPress={() => setOpenCalendar(!openCalendar)}
          >
            <View>
              <Icon
                name="calendar"
                size="large"
                color="smallText"
                style={styles.calendarIcon}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={[styles.line, { backgroundColor: generalGray }]} />
      </View>

      <Modal
        isVisible={openCalendar}
        backdropColor={titleText}
        backdropOpacity={0.3}
      >
        <Calendar
          style={styles.calendar}
          enableSwipeMonths={true}
          onDayPress={(day: any) => {
            setTempDate(day.dateString);
          }}
          renderArrow={(direction: string) =>
            direction === "left" ? (
              <Icon name="chevron-left" color="primaryBackgroundOpaque" />
            ) : (
              <Icon name="chevron-right" color="primaryBackgroundOpaque" />
            )
          }
          theme={{
            calendarBackground: backgroundSecondary,
            selectedDayBackgroundColor: primary,
            selectedDayTextColor: backgroundSecondary,
            textSectionTitleColor: titleText,
            textDisabledColor: primaryBackgroundOpaque,
            todayTextColor: primary,
            dayTextColor: titleText,
            monthTextColor: primary,
            textMonthFontWeight: "bold",
            textDayFontSize: 13,
            textMonthFontSize: 20,
          }}
          markedDates={{
            [tempDate]: { selected: true, selectedColor: primary },
          }}
        />
        <View
          style={[
            styles.btnContainer,
            { backgroundColor: backgroundSecondary },
          ]}
        >
          <View style={styles.BtnAlignText}>
            <TouchableWithoutFeedback
              onPress={() => setOpenCalendar(!openCalendar)}
            >
              <View>
                <Text color="bodyText" variant="body">
                  Cancel
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => {
                setDate(tempDate);
                setOpenCalendar(!openCalendar);
              }}
            >
              <View>
                <Text
                  style={[{ color: primary }, styles.alignOkBtn]}
                  variant="body"
                >
                  Ok
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Modal>
    </View>
  );
};
