import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";
import { Icon } from "../../../components";
import { colors } from "../../../constants";

const User_Avatar = () => {
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

      <View style={styles.Avatar}>
        <View style={styles.Image}>
          <Avatar.Image
            size={140}
            source={require("../../../assets/Josh.png")}
          />
        </View>
        <View style={styles.EditContainer}>
          <Icon name="edit" color="primary" size="medium" />
        </View>
      </View>
    </View>
  );
};

export default User_Avatar;

const styles = StyleSheet.create({
  Avatar: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Image: {
    borderRadius: 200,
    borderWidth: 6,
    borderColor: colors.light.backgroundSecondary,
  },
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
