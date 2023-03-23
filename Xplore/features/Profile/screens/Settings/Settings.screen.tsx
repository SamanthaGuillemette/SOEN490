import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Icon, ShadowView } from "../../../../components";
import { EditButton } from "../../components";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useThemeColor } from "../../../../hooks";
import api from "../../../../services/appwrite/api";
import { BUCKET_PROFILE_PIC } from "@env";
import { uploadImageToServer } from "../../../../utils";
import { useQuery } from "react-query";
import styles from "./Settings.styles";

interface SettingsProps {
  navigation: NavigationProp<any>;
}

const Settings = (props: SettingsProps) => {
  const { navigation } = props;
  const statusBarBg = useThemeColor("background"); // Status bar background (only required for Android)
  const [localImage, setLocalImage] = useState<string>();
  const [latestProfileImageId, setLatestProfileImageId] = useState();

  // TODO: Get the lastest imageID (string) user uploaded (last item from the array "profileImages") - User collection
  // const { data } = useQuery("profileImages", () => ....

  // TODO: "latestProfileImageId" should come from the result we got above
  const { data } = useQuery("latest profile image", () =>
    api.getFilePreview(BUCKET_PROFILE_PIC, latestProfileImageId || "")
  );
  console.log("====> React Query data: ", data);

  const handleUploadImage = async () => {
    // No permissions request is necessary for launching the image gallery
    let pickedImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });
    // console.log(JSON.stringify(pickedImage, null, 2));

    if (!pickedImage.cancelled) {
      setLocalImage(pickedImage.uri); // Set local image so that the picture is displayed right away.

      const uploadedImageResult: any = await uploadImageToServer(
        pickedImage.uri,
        BUCKET_PROFILE_PIC
      );
      // console.log(
      //   "======> uploadedImageResult",
      //   JSON.stringify(uploadedImageResult, null, 2)
      // );

      setLatestProfileImageId(uploadedImageResult?.$id); // Capture the uploaded image id

      // TODO: Add this imageID to the user's profileImages array (in the User collection)
      // spread out the existing profileImages array and add the new imageID to it
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
            <Avatar size={135} name="user avatar" imageURL={localImage} />
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
              onPress={() => navigation.navigate("UpdatePassword")}
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
