import styles from "./DescriptionCard.styles";
import { useThemeColor } from "../../../../../hooks";
import { Text, View } from "../../../../../components";
import { Member } from "../../../../../components/Member";

export const DescriptionCard = () => {
  const bgColor = useThemeColor("backgroundSecondary");
  return (
    <View style={[styles.MainContainer, { borderTopColor: bgColor }]}>
      <View style={styles.OuterContainer}>
        <Text variant="h3" color="titleText" style={styles.InnerContainer}>
          Description
        </Text>
        <Text variant="body" color="bodyText" style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </View>
      <View style={styles.OuterContainer}>
        <Text variant="h3" color="titleText" style={styles.InnerContainer}>
          Category
        </Text>
        <Text variant="body" color="bodyText">
          Design
        </Text>
      </View>
      <View style={styles.OuterContainer}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text variant="h3" color="titleText" style={styles.InnerContainer}>
              Starts
            </Text>
            <Text variant="body" color="bodyText" style={styles.OuterContainer}>
              13/12/2022
            </Text>
          </View>
          <View style={{ marginLeft: 108 }}>
            <Text variant="h3" color="titleText" style={styles.InnerContainer}>
              Ends
            </Text>
            <Text variant="body" color="bodyText" style={styles.OuterContainer}>
              18/12/2022
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.OuterContainer}>
        <Text variant="h3" color="titleText">
          Participants
        </Text>
      </View>
      <View style={styles.MemberContainer}>
        <View>
          <Member userName="Amy" avatar="https://picsum.photos/200" />
        </View>
        <View style={styles.Member}>
          <Member userName="Bernice" avatar="https://picsum.photos/201" />
        </View>
      </View>
    </View>
  );
};
