import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";
import { Text } from "../../../components";
import { Icon } from "../../../components";

const ProfileInfo = () => {
  return (
    <View>
      <View style={styles.ProfileIcons}>
        {/* <Icon style={styles.darkmode} name="circle" color="primary" /> */}
        <Icon name="moon" color="primary" style={styles.Darkmode} />
        <Icon name="bell" color="primary" style={styles.Bell} />
      </View>
      <View style={styles.ProfileInfo}>
        <Text variant="h1">Josh Lewis</Text>
        <Text>Montreal, Quebec</Text>
        <Text>103,597 XP</Text>
      </View>
      <View style={styles.Avatar}>
        {/* <Avatar.Text size={100} label="Av" /> */}
        <Avatar.Image size={110} source={require("../../../assets/Josh.png")} />
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
    // justifyContent: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    backgroundColor: "white",
    marginTop: 110,
    marginBottom: 100,
    paddingTop: 50,
  },
  Avatar: {
    alignSelf: "center",
    position: "absolute",
    marginTop: 80,
  },
  ProfileIcons: {
    flexDirection: "row",
  },
  Darkmode: {
    marginLeft: 30,
  },
  Bell: {
    flexDirection: "row",
    marginLeft: 310,
  },
});
