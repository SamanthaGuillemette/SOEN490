import { Calendar } from "react-native-calendars";
import Icon from "../../components/Icon/Icon.component";
import { Text } from "../../components/Text/Text.component";
import { ShadowView } from "../../components/ShadowView/ShadowView.component";
import { useThemeColor } from "../../hooks";
import { StyleProp, ViewStyle } from "react-native";
import { TouchableWithoutFeedback, View } from "react-native";
import { useState } from "react";
import styles from "./CustomCalendar.styles";

interface CustomCalendarProps {
  title: string;
  style?: StyleProp<ViewStyle>;
}

export const CustomCalendar = (props: CustomCalendarProps) => {
  const { title, style } = props;
  const [openCalendar, setOpenCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState("YYYY-MM-DD");
  const [tempDate, setTempDate] = useState("YYYY-MM-DD");
  const primary = useThemeColor("primary");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const primaryBackgroundOpaque = useThemeColor("primaryBackgroundOpaque");
  const titleText = useThemeColor("titleText");
  const generalGray = useThemeColor("generalGray");

  return (
    <View>
      <View style={[style, styles.padding]}>
        <Text color="titleText" variant="h3">
          {title}
        </Text>

        <View style={styles.alignRow}>
          <Text color="bodyText" variant="label">
            {selectedDate}
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

      {openCalendar ? (
        <ShadowView style={styles.shadowView}>
          <Calendar
            style={styles.calendar}
            enableSwipeMonths={true}
            onDayPress={(day) => {
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
                  setSelectedDate(tempDate);
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
        </ShadowView>
      ) : (
        <></>
      )}
    </View>
  );
};
