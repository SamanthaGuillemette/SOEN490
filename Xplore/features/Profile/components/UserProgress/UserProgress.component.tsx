import { LinearProgressBar, Text, View } from "../../../../components";
import { fonts } from "../../../../constants";
import styles from "./UserProgress.styles";

interface UserProgressProps {
  xp: number;
}

export const UserProgress = (props: UserProgressProps) => {
  const { xp } = props;
  return (
    <View style={styles.mainContainer}>
      <LinearProgressBar progress={xp} />

      <View style={styles.userStatText}>
        <Text>
          <Text
            variant="smBody"
            color="bodyText"
            style={{ fontFamily: fonts.defaultBold }}
          >
            {`${xp} / 1000 XP`}
          </Text>
        </Text>
        <Text>
          <Text
            variant="smBody"
            color="bodyText"
            style={{ fontFamily: fonts.defaultBold }}
          >
            {`${1000 - xp} required to level up`}
          </Text>
        </Text>
      </View>
    </View>
  );
};
