import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Icon, ShadowView } from "../../../../components";
import { EditButton, GobackButton } from "../../components";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useThemeColor } from "../../../../hooks";
import api from "../../../../services/appwrite/api";
import { BUCKET_PROFILE_PIC, COLLECTION_ID_USERS } from "@env";
import { uploadImageToServer } from "../../../../utils";
import { useMutation, useQueryClient } from "react-query";
import styles from "./Settings.styles";
import { useFetchUserDetails } from "../../hooks/useFetchUserDetails";
import { useFetchProfilePicture } from "../../hooks/useFetchProfilePicture";

interface SettingsProps {
  navigation: NavigationProp<any>;
}

const Settings = (props: SettingsProps) => {
  const { navigation } = props;
  const statusBarBg = useThemeColor("background");
  const [userDocumentId, setUserDocumentId] = useState<string>();
  const [profilePictureId, setProfilePictureId] = useState<string>();
  const [localProfilePic, setLocalProfilePic] = useState<URL>();
  const { data: userObject } = useFetchUserDetails();

  useEffect(() => {
    setUserDocumentId(userObject?.$id); // This is the actual document Id - DIFFERENT from the 'userId'
    setProfilePictureId(userObject?.profilePicture);
  }, [userObject]);

  const profilePicture = useFetchProfilePicture(profilePictureId ?? "");

  useEffect(() => {
    setLocalProfilePic(profilePicture);
  }, [profilePicture]);

  const queryClient = useQueryClient();
  const mutation = useMutation(
    (updatedProfiePictureId: string) => {
      return api.updateDocument(COLLECTION_ID_USERS, userDocumentId!, {
        profilePicture: updatedProfiePictureId,
      });
    },
    {
      // On success of this action, invalidate & refetch the "user" query & "profile picture" query
      onSuccess: () => {
        queryClient.invalidateQueries("user");
        queryClient.invalidateQueries("profile picture");
      },
    }
  );

  const handleUploadImage = async () => {
    // No permissions request is necessary for launching the image gallery
    let pickedImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (!pickedImage.cancelled) {
      setLocalProfilePic(pickedImage.uri as any); // Set local image so that the picture is displayed right away.

      const uploadedImageResult: any = await uploadImageToServer(
        pickedImage.uri,
        BUCKET_PROFILE_PIC
      );

      // Need to check "userDocumentId" -> use inside the mutate function
      if (userDocumentId) {
        mutation.mutate(uploadedImageResult?.$id);
      }
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
          <GobackButton navigation={navigation} />

          <View style={styles.avatarContainer}>
            <Avatar
              size={135}
              name={userObject?.username}
              imageURL={localProfilePic}
            />
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
              onPress={() => navigation.navigate("EditProfile")}
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
