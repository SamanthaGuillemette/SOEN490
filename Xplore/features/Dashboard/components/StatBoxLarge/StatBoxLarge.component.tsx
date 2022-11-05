import { Icon, ShadowView, Text } from "../../../../components";
import { Feather } from "@expo/vector-icons";
import styles from "./StatBoxLarge.styles";

interface StatBoxLargeProps {
  title: string;
  subTitle: string;
  iconName: keyof typeof Feather.glyphMap;
}

export const StatBoxLarge = (props: StatBoxLargeProps) => {
  const { title, subTitle, iconName } = props;

  return (
    <ShadowView backgroundColor="backgroundSecondary" style={styles.container}>
      <Icon name={iconName} color="primary" style={styles.statIcon} />
      <Text variant="h3" color="titleText">
        {title}
      </Text>
      <Text variant="body" color="bodyText">
        {subTitle}
      </Text>
    </ShadowView>
  );
};

export default StatBoxLarge;
