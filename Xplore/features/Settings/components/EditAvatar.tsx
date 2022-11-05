import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { Icon, UserAvatar } from "../../../components";
import { useThemeColor } from "../../../hooks";
import { useNavigation } from "@react-navigation/native";

const EditAvatar = () => {
  const whiteBackground = useThemeColor("backgroundSecondary");
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.ProfileIcons}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Profile" as never, {} as never)}
        >
          <View style={styles.Arrow_Left}>
            <Icon name="arrow-left" color="primary" size="large" />
          </View>
        </TouchableWithoutFeedback>
        <View>
          <Icon name="bell" color="primary" size="large" style={styles.Bell} />
          <View style={styles.RedDot}></View>
        </View>
      </View>

      <UserAvatar index={0} size={135} />
      <View
        style={[styles.EditContainer, { backgroundColor: whiteBackground }]}
      >
        <Icon name="edit" color="primary" size="medium" />
      </View>
    </View>
  );
};

export default EditAvatar;

const styles = StyleSheet.create({
  ProfileIcons: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  Bell: {
    flexDirection: "row",
    marginRight: 29,
  },
  Arrow_Left: {
    flexDirection: "row",
    marginLeft: 30,
  },
  EditContainer: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    borderRadius: 100,
    bottom: 8,
    right: 140,
  },
  RedDot: {
    width: 9,
    height: 9,
    backgroundColor: "red",
    borderRadius: 50,
    marginLeft: 15,
    marginTop: -22,
  },
});
