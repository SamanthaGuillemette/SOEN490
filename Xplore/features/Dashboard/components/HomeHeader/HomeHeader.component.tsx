import { Avatar } from "react-native-paper";
import { LinkButton, ShadowView, Text, View } from "../../../../components";
import styles from "./HomeHeader.styles";

export const HomeHeader = () => {
  return (
    <ShadowView
      shadowOffset={4}
      backgroundColor="backgroundSecondary"
      style={styles.homeHeaderBar}
    >
      <View>
        <Text variant="h1" color="titleText">
          Hi Josh,
        </Text>
        <Text variant="body" color="bodyText">
          Ready for a new challenge?
        </Text>
        <LinkButton style={styles.linkButton}>View your projects</LinkButton>
      </View>
      <View>
        <Avatar.Text size={40} label="JS" />
      </View>
    </ShadowView>
  );
};

export default HomeHeader;
