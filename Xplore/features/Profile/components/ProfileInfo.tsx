import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";
import { Text, Icon } from "../../../components";
import { colors } from "../../../constants";

const ProfileInfo = () => {
  return (
    <View>
      <View style={styles.ProfileIcons}>
        <View style={styles.IconContainer}>
          <Icon
            name="moon"
            color="primary"
            size="large"
            style={styles.Darkmode}
          />
        </View>

        <Icon name="bell" color="primary" size="large" style={styles.Bell} />
      </View>
      <View style={styles.ProfileInfo}>
        <Text variant="h1">Josh Lewis</Text>
        <Text>
          <Icon name="map-pin" color="icon" />
          Montreal, Quebec
        </Text>
        <Text>
          <Icon name="zap" color="icon" />
          103,597 XP
        </Text>
        <View style={styles.Rec}>
          <View style={styles.BiggerRectangle}>
            <View style={styles.Rectangle} />
          </View>
          <View style={styles.Description}>
            <Text variant="body">
              980/1000 <Text variant="h3">XP</Text>
            </Text>
            <View>
              <Text variant="body">
                <Text variant="h3">30 XP</Text> to level up
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.Boxes}>
          <View style={styles.Box}>
            <Text variant="h2">5</Text>
            <Text variant="body">Levels</Text>
          </View>
          <View style={styles.Box}>
            <Text variant="h2">8</Text>
            <Text variant="body">Badges</Text>
          </View>
          <View style={styles.Box}>
            <Text variant="h2">12</Text>
            <Text variant="body">Projects</Text>
          </View>
        </View>
      </View>

      <View style={styles.Avatar}>
        <Avatar.Image size={110} source={require("../../../assets/Josh.png")} />
        <View style={styles.EditContainer}>
          <Icon name="edit" color="primary" size="large" />
        </View>
      </View>
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  ProfileInfo: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    backgroundColor: colors.light.backgroundSecondary,
    marginTop: 120,
    paddingTop: 40,
  },
  Avatar: {
    alignSelf: "center",
    position: "absolute",
    marginTop: 80,
    borderRadius: 100,
    backgroundColor: colors.light.backgroundSecondary,
    borderWidth: 10,
    borderColor: colors.light.backgroundSecondary,
  },
  ProfileIcons: {
    flexDirection: "row",
    marginTop: 10,
  },
  Darkmode: {
    marginLeft: 2,
  },
  Bell: {
    flexDirection: "row",
    marginLeft: 270,
  },

  Rec: {
    marginTop: 20,
  },
  BiggerRectangle: {
    width: 300,
    height: 6,
    backgroundColor: colors.light.background,
    borderRadius: 100,
  },
  Rectangle: {
    width: 100 * 2,
    height: 6,
    backgroundColor: colors.light.primary,
    borderRadius: 100,
  },

  Boxes: {
    flexDirection: "row",
    padding: 20,
  },
  Box: {
    alignItems: "center",
    justifyContent: "center",
    width: 110,
    height: 80,
    backgroundColor: colors.light.background,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  IconContainer: {
    width: 40,
    height: 40,
    backgroundColor: colors.light.icon,
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
    borderRadius: 50,
    marginTop: -20,
    marginLeft: 80,
  },
  Description: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
