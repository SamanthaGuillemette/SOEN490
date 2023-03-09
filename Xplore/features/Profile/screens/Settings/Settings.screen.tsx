import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, Icon, ShadowView } from "../../../../components";
import { EditButton } from "../../components";
import { deviceScreenWidth } from "../../../../constants";

interface SettingsProps {
  navigation: NavigationProp<any>;
}

const Settings = (props: SettingsProps) => {
  const { navigation } = props;
  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.safeAreaStyle}>
      <ScrollView>
        <View style={styles.backButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="chevron-left" color="primary" />
          </TouchableOpacity>
        </View>

        <View style={styles.avatarContainer}>
          <Avatar
            size={135}
            name="user avatar"
            imageURL="https://picsum.photos/200"
          />
          <TouchableOpacity
            style={styles.editAvatarButton}
            onPress={() => {
              alert("upload new image");
            }}
          >
            <ShadowView
              backgroundColor="white"
              style={styles.editAvatarButtonShadow}
            >
              <Icon name="edit" size="small" />
            </ShadowView>
          </TouchableOpacity>
        </View>

        <View style={styles.settingButtonsContainer}>
          <EditButton
            iconName="user"
            label="Edit Profile"
            onPress={() => alert("pressed!")}
          />
          <EditButton
            iconName="lock"
            label="Change Password"
            onPress={() => alert("pressed!")}
          />
          <EditButton
            iconName="smile"
            label="Update Interests"
            onPress={() => alert("pressed!")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
  backButton: {
    paddingTop: 25,
    paddingLeft: 23,
    paddingBottom: 16,
    width: 80,
  },
  avatarContainer: {
    alignItems: "center",
  },
  editAvatarButton: {
    position: "absolute",
    bottom: 10,
    right: deviceScreenWidth / 2 - 60,
    zIndex: 1,
  },
  editAvatarButtonShadow: {
    padding: 8,
    borderRadius: 50,
  },
  settingButtonsContainer: {
    marginTop: 75,
    paddingHorizontal: 30,
  },
});
