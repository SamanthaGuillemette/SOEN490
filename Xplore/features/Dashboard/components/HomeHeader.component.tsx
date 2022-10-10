import { StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import { LinkButton, ShadowView, Text, View } from "../../../components";

const HomeHeader = () => {
  return (
    <ShadowView
      shadowOffset={4}
      backgroundColor="backgroundSecondary"
      style={styles.homeHeaderBar}
    >
      <View>
        <Text variant="h1">Hi Josh,</Text>
        <Text>Ready for a new challenge?</Text>
        <LinkButton style={styles.linkButton}>View your projects</LinkButton>
      </View>
      <View>
        <Avatar.Text size={40} label="JS" />
      </View>
    </ShadowView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  homeHeaderBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 30,
    marginBottom: -20,
    zIndex: 1,
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
  },
  linkButton: {
    marginTop: 5,
  },
});
