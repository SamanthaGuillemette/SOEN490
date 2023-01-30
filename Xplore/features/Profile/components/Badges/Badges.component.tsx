import { View } from "react-native";
import { LinkButton, Text, Badge } from "../../../../components";
import { ScrollView } from "react-native";
import { useThemeColor } from "../../../../hooks";
import styles from "./Badges.styles";

export const Badges = () => {
  const generalGray = useThemeColor("generalGray");

  return (
    <View style={[styles.mainContainer, { borderTopColor: generalGray }]}>
      <View style={[styles.badgeTitleContainer]}>
        <Text variant="h3" color="titleText">
          BADGES
        </Text>
        <LinkButton>View all</LinkButton>
      </View>

      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <Badge index={0} />
          <Badge index={1} />
          <Badge index={2} />
          <Badge index={3} />
          <Badge index={0} />
          <Badge index={1} />
          <Badge index={2} />
          <Badge index={3} />
        </ScrollView>
      </View>
    </View>
  );
};
