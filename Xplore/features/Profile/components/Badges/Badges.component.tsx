import { View } from "react-native";
import { LinkButton, Text, Badge } from "../../../../components";
import { ScrollView } from "react-native";
import { useThemeColor } from "../../../../hooks";
import styles from ".//Badges.styles";

interface BadgesProps {
  xpLevel: number;
}

export const Badges = (props: BadgesProps) => {
  const generalGray = useThemeColor("generalGray");
  return (
    <View style={[styles.mainContainer, { borderTopColor: generalGray }]}>
      <View style={[styles.badgeTitleContainer]}>
        <Text variant="h3" color="titleText">
          BADGES
        </Text>
        {props.xpLevel > 0 ? <LinkButton>View all</LinkButton> : <></>}
      </View>

      <View>
        {props.xpLevel > 0 ? (
          <>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollViewContainer}
            >
              {Array(props.xpLevel)
                .fill(0)
                .map((_, i) => (
                  <Badge xpLevel={i} />
                ))}
            </ScrollView>
          </>
        ) : (
          <Text style={{ textAlign: "center" }}>no badges yet!</Text>
        )}
      </View>
    </View>
  );
};
