import { StyleSheet } from "react-native";
import { ShadowView, Text, View, Icon } from "../../../components";

const ProjectHeader = () => {
  return (
    <ShadowView
      shadowOffset={4}
      backgroundColor="backgroundSecondary"
      style={styles.projectHeaderBar}
    >
      <View>
        <Text variant="h1">
          <Icon name="chevron-left" color="gray100" style={styles.backIcon} />
          Projects
        </Text>
      </View>
      <Icon name="search" color="gray100" style={styles.searchIcon} />
    </ShadowView>
  );
};

export default ProjectHeader;

const styles = StyleSheet.create({
  projectHeaderBar: {
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
  backIcon: {},
  searchIcon: {},
});
