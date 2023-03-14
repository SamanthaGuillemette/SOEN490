import { LinearProgressBar, Text, View } from "../../../../components";
import { fonts } from "../../../../constants";
import styles from "./UserProgress.styles";

const getNextXPlevel = (xp: number) => {
  if (xp >= 250 && xp < 500) {
    return 500;
  } else if (xp >= 500 && xp < 1000) {
    return 1000;
  } else if (xp >= 1000 && xp < 2500) {
    return 2500;
  } else if (xp >= 2500 && xp < 5000) {
    return 5000;
  } else if (xp >= 5000 && xp < 10000) {
    return 10000;
  } else if (xp >= 10000 && xp < 25000) {
    return 25000;
  } else if (xp >= 25000 && xp < 50000) {
    return 50000;
  } else {
    return 250;
  }
};

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
            {`${xp} / ${getNextXPlevel(xp)} XP`}
          </Text>
        </Text>
        <Text>
          <Text
            variant="smBody"
            color="bodyText"
            style={{ fontFamily: fonts.default }}
          >
            {`${getNextXPlevel(xp) - xp} to level up`}
          </Text>
        </Text>
      </View>
    </View>
  );
};
