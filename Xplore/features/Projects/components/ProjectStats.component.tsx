import React from "react";
import { StyleSheet } from "react-native";
import { Icon, Text, View } from "../../../components";

const ProjectStats = () => {
  return (
    <View backgroundColor="background">
      <View style={styles.statBox}>
        <Text style={styles.textStyle}>
          <Icon name="file-text" style={styles.iconStyle} />
          13 tasks
        </Text>
        <Text style={styles.textStyle}>
          <Icon name="message-circle" style={styles.iconStyle} />
          38 Conversations
        </Text>
        <Text style={styles.textStyle}>
          <Icon name="calendar" style={styles.iconStyle} />
          August 12, 2022
        </Text>
      </View>
    </View>
  );
};

export default ProjectStats;

const styles = StyleSheet.create({
  statBox: {
    width: 290,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 60,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  iconStyle: {
    width: 12,
    height: 7,
    color: "gray100",
  },
  textStyle: {
    marginTop: 3,
  },
});
