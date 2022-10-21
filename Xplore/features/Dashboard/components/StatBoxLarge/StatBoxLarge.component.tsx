import { Icon, ShadowView, Text } from "../../../../components";
import styles from "./StatBoxLarge.styles";

export const StatBoxLarge = () => {
  return (
    <ShadowView style={styles.container}>
      <Icon name="refresh-ccw" color="primary" style={styles.statIcon} />
      <Text variant="h3" color="titleText">
        In Progress
      </Text>
      <Text variant="body" color="bodyText">
        3 Projects
      </Text>
    </ShadowView>
  );
};

export default StatBoxLarge;
