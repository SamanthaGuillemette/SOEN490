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
          <View style={styles.IconContainer}>
            <Icon
              name="arrow-left"
              color="primary"
              size="large"
              style={{ marginLeft: 2 }}
            />
          </View>
        </TouchableWithoutFeedback>
        <Icon name="bell" color="primary" size="large" style={styles.Bell} />
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
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    borderRadius: 100,
    bottom: 8,
    right: 140,
  },
});
