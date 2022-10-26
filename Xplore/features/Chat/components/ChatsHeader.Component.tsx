import { StyleSheet } from "react-native";
import { ShadowView, Text } from "../../../components";

const ChatsHeader = () => {
  return (
    <ShadowView
      shadowOffset={4}
      backgroundColor="backgroundSecondary"
      style={styles.homeHeaderBar}
    >
      <Text variant="h2">Messages</Text>
    </ShadowView>
  );
};

export default ChatsHeader;

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
});
