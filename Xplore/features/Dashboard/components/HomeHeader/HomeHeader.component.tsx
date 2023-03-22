import { NavigationProp } from "@react-navigation/native";
import {
  Avatar,
  LinkButton,
  ShadowView,
  Text,
  View,
} from "../../../../components";
import styles from "./HomeHeader.styles";
interface HomeHeaderProps {
  navigation: NavigationProp<any>;
}
export const HomeHeader = (props: HomeHeaderProps) => {
  const { navigation } = props;
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
        <LinkButton
          style={styles.linkButton}
          onPress={() => navigation.navigate("UserProjects")}
        >
          View your projects
        </LinkButton>
      </View>
      <View>
        <Avatar name="Josh" imageURL="https://picsum.photos/200" size={60} />
      </View>
    </ShadowView>
  );
};

export default HomeHeader;
