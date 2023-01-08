import { NavigationProp } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon, ShadowView, Text, View } from "../components";

interface TopHeaderProps {
  screenName: String;
  navigation: NavigationProp<any>;
}

const TopHeader = (props: TopHeaderProps) => {
  const { navigation } = props;

  return (
    <ShadowView
      shadowOffset={4}
      backgroundColor="backgroundSecondary"
      style={styles.headerBar}
    >
      <View style={styles.navLeftItems}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon style={styles.arrowIcon} name="chevron-left" />
        </TouchableOpacity>
        <Text variant="h2">{props.screenName}</Text>
      </View>
      <TouchableOpacity>
        <Icon name="search" />
      </TouchableOpacity>
    </ShadowView>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  headerBar: {
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
  navLeftItems: {
    flexDirection: "row",
  },
  arrowIcon: {
    paddingRight: 10,
    marginTop: 4,
  },
  screenName: {
    paddingLeft: 20,
  },
});
