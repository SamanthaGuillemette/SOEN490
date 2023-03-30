import { NavigationProp } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  Icon,
  MembersActionsModal,
  ShadowView,
  Text,
  View,
} from "../components";
import { useListUsers } from "../services/api/search";

interface TopHeaderProps {
  screenName: String;
  navigation: NavigationProp<any>;
  name?: string; // Optional name property
  projectInfo?: any;
}

const TopHeader = (props: TopHeaderProps) => {
  const { navigation, projectInfo } = props;
  const [createGroupVisible, setCreateGroupVisible] = useState<any>(false);
  const users = useListUsers();
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
      {props.name === "edit" &&
        (projectInfo.isOwner === true ? (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProjectEdit", {
                projectInfo: projectInfo.isOwner,
              })
            }
          >
            <Icon name="edit" style={styles.editIcon} />
          </TouchableOpacity>
        ) : (
          <></>
        ))}
      {props.name === "group_chat" && (
        <TouchableOpacity onPress={() => setCreateGroupVisible(true)}>
          <Icon name="plus" style={styles.editIcon} />
        </TouchableOpacity>
      )}
      {createGroupVisible === true && (
        <MembersActionsModal
          setActionsModalVisible={setCreateGroupVisible}
          action="Create Group"
          users={users}
        />
      )}
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
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
  editIcon: {
    flexDirection: "row",
    marginLeft: 120,
  },
});
