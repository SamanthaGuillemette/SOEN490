import { NavigationProp } from "@react-navigation/native";
import {
  Avatar,
  LinkButton,
  ShadowView,
  Text,
  View,
} from "../../../../components";
import { useFetchUserDetails } from "../../../Profile/hooks/useFetchUserDetails";
import styles from "./HomeHeader.styles";
import { useFetchProfilePicture } from "../../../Profile/hooks/useFetchProfilePicture";
import { useEffect, useState } from "react";
interface HomeHeaderProps {
  navigation: NavigationProp<any>;
}
export const HomeHeader = (props: HomeHeaderProps) => {
  const { data: userObject } = useFetchUserDetails();
  const { navigation } = props;
  const [profilePictureId, setProfilePictureId] = useState<string>();
  const name =
    userObject?.username === undefined ? "undefined" : userObject.username;

  useEffect(() => {
    setProfilePictureId(userObject?.profilePicture);
  }, [userObject]);
  const profilePicture = useFetchProfilePicture(profilePictureId ?? "");
  return (
    <ShadowView
      shadowOffset={4}
      backgroundColor="backgroundSecondary"
      style={styles.homeHeaderBar}
    >
      <View>
        <Text variant="h1" color="titleText">
          {userObject?.username},
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
        <Avatar name={name} imageURL={profilePicture} size={60} />
      </View>
    </ShadowView>
  );
};

export default HomeHeader;
