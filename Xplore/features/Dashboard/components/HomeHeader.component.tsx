import { StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import { LinkButton, ShadowView, Text, View } from "../../../components";

const HomeHeader = () => {
  return (
    <ShadowView style={styles.homeHeaderBar}>
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
    backgroundColor: "lightblue",
  },
  linkButton: {
    marginTop: 5,
  },
});
