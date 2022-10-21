import { Icon, ShadowView, Text, View } from "../../../../components";
import styles from "./StatBoxSmall.styles";

export const StatBoxSmall = () => {
  return (
    <ShadowView style={styles.container}>
      <View style={styles.title}>
        <Text variant="h3" color="titleText">
          Completed
        </Text>
        <Icon name="check-circle" color="primary" />
      </View>
      <Text variant="body" color="bodyText">
        20 Tasks
      </Text>
    </ShadowView>
  );
};

export default StatBoxSmall;
