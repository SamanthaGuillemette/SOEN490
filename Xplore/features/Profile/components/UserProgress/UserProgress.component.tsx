import { LinearProgressBar, Text, View } from "../../../../components";
import { fonts } from "../../../../constants";
import styles from "./UserProgress.styles";

export const UserProgress = () => {
  return (
    <View style={styles.mainContainer}>
      <LinearProgressBar progress={0.8} />

      <View style={styles.userStatText}>
        <Text>
          <Text variant="smBody" color="bodyText">
            970/1000
          </Text>
          <Text
            variant="smBody"
            color="bodyText"
            style={{ fontFamily: fonts.defaultBold }}
          >
            {" "}
            XP
          </Text>
        </Text>
        <Text>
          <Text
            variant="smBody"
            color="bodyText"
            style={{ fontFamily: fonts.defaultBold }}
          >
            30 XP
          </Text>
          <Text variant="smBody" color="bodyText">
            {" "}
            to level up
          </Text>
        </Text>
      </View>
    </View>
  );
};
