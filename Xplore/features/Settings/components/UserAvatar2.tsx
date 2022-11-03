import { StyleSheet, View } from "react-native";
//import { Avatar } from "react-native-paper";
import { Icon, UserAvatar } from "../../../components";
import { colors } from "../../../constants";
import { Avatar } from "react-native-paper";

const UserAvatar2 = () => {
  return (
    <View>
      <View style={styles.ProfileIcons}>
        <View style={styles.IconContainer}>
          <Icon
            name="arrow-left"
            color="primary"
            size="large"
            style={{ marginLeft: 2 }}
          />
        </View>
        <Icon name="bell" color="primary" size="large" style={styles.Bell} />
      </View>

      <UserAvatar imageName={"Josh"} />
      <View style={styles.EditContainer}>
        <Icon name="edit" color="primary" size="medium" />
      </View>
    </View>
  );
};

export default UserAvatar2;

const styles = StyleSheet.create({
  ProfileIcons: {
    flexDirection: "row",
    marginTop: 10,
  },
  Bell: {
    flexDirection: "row",
    marginLeft: 270,
  },
  IconContainer: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginLeft: 40,
  },
  EditContainer: {
    width: 30,
    height: 30,
    backgroundColor: colors.light.backgroundSecondary,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    borderRadius: 100,
    bottom: 8,
    right: 140,
  },
});
