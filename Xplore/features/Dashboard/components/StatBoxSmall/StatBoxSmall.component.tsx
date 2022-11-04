import { Icon, ShadowView, Text, View } from "../../../../components";
import { Feather } from "@expo/vector-icons";
import styles from "./StatBoxSmall.styles";

interface StatBoxSmallProps {
  title: string;
  subTitle: string;
  iconName: keyof typeof Feather.glyphMap;
}

export const StatBoxSmall = (props: StatBoxSmallProps) => {
  const { title, subTitle, iconName } = props;

  return (
    <ShadowView style={styles.container}>
      <View style={styles.title}>
        <Text variant="h3" color="titleText">
          {title}
        </Text>
        <Icon name={iconName} color="primary" />
      </View>
      <Text variant="body" color="bodyText">
        {subTitle}
      </Text>
    </ShadowView>
  );
};

export default StatBoxSmall;
