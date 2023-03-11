import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Icon, ShadowView, Text } from "../../../../components";
import { EditButton } from "../../components";
import { deviceScreenWidth } from "../../../../constants";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useThemeColor } from "../../../../hooks";

interface SettingsProps {
  navigation: NavigationProp<any>;
}

const Settings = (props: SettingsProps) => {
  const { navigation } = props;
  const statusBarBg = useThemeColor("background"); // Status bar background (only required for Android)
  const [image, setImage] = useState<string>();

  const handleUploadImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    // LOG OUT the image info
    console.log(JSON.stringify(result, null, 2));

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <>
      <StatusBar style="auto" backgroundColor={statusBarBg} />
      <SafeAreaView
        edges={["top", "left", "right"]}
        style={styles.safeAreaStyle}
      >
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
            <Avatar size={135} name="user avatar" imageURL={image} />
            <TouchableOpacity
              style={styles.editAvatarButton}
              onPress={handleUploadImage}
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
              onPress={() => {
                navigation.navigate("TopicSelection");
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Settings;

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
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
