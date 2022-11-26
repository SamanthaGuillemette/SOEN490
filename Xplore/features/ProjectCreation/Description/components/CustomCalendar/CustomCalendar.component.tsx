import { Calendar } from "react-native-calendars";
import { useThemeColor } from "../../../../../hooks";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const CustomCalendar = ({ date }) => {
  const primary = useThemeColor("primary");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const [selectedDate, setSelectedDate] = useState(date);

  return (
    <View>
      <View style={styles.calender_container}>
        <Calendar
          enableSwipeMonths={true}
          onDayPress={(day) => {
            console.log("selected day", day.dateString);
            setSelectedDate(day.dateString);
          }}
          theme={{
            todayTextColor: "#2A9D8F",
            dayTextColor: "#2d4150",
            dotColor: "#2A9D8F",
            arrowColor: "#2A9D8F",
            indicatorColor: "#2A9D8F",
          }}
        />
      </View>
    </View>
  );
};

export default CustomCalendar;

const styles = StyleSheet.create({
  calender_container: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    marginVertical: 15,
    shadowOpacity: 0.1,
    elevation: 1,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#2A9D8F",
  },
  list_header: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 15,
  },
});
