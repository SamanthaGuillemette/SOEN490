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
  const { data: userObject } = useFetchUserDetails();

  useEffect(() => {
    setUserDocumentId(userObject?.$id); // Actual document Id - DIFFERENT from 'userObject?.userId'
  }, [userObject]);

  const queryClient = useQueryClient();
  const mutation = useMutation(
    (profilePictureURL: string) => {
      return api.updateDocument(COLLECTION_ID_USERS, userDocumentId!, {
        profilePicture: profilePictureURL,
      });
    },
    {
      // On success of this action, invalidate & refetch the "user" query - useFetchUserDetails()
      onSuccess: () => {
        queryClient.invalidateQueries("user");
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

    if (!pickedImage.canceled) {
      try {
        const uploadedImageResult: any = await uploadImageToServer(
          pickedImage.assets[0].uri,
          BUCKET_PROFILE_PIC
        );

        setProfilePictureId(uploadedImageResult?.$id);
      } catch (error) {
        console.log("===> Upload avatar failed: ", error);
      }
    }
  };

  const profilePictureURL = useFetchProfilePicture(profilePictureId ?? "");

  useEffect(() => {
    // Need to check "userDocumentId" -> use inside the mutate function
    if (profilePictureURL && userDocumentId) {
      mutation.mutate(profilePictureURL.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profilePictureId, profilePictureURL, userDocumentId]);

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
              imageURL={userObject?.profilePicture}
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
