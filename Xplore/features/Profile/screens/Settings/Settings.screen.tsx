import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Icon, ShadowView } from "../../../../components";
import { EditButton } from "../../components";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useAuth, useThemeColor } from "../../../../hooks";
import api from "../../../../services/appwrite/api";
import { BUCKET_PROFILE_PIC, COLLECTION_ID_USERS } from "@env";
import { uploadImageToServer } from "../../../../utils";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import styles from "./Settings.styles";
import { Query } from "appwrite";

interface SettingsProps {
  navigation: NavigationProp<any>;
}

const Settings = (props: SettingsProps) => {
  const { navigation } = props;
  const { sessionToken } = useAuth();
  const statusBarBg = useThemeColor("background");
  const [userId] = useState<string>(sessionToken?.userId!);
  const [userDocumentId, setUserDocumentId] = useState<string>();
  const [localImage, setLocalImage] = useState<any>();
  const [latestProfileImageId, setLatestProfileImageId] = useState();

  // TODO: Move this function to a separate file later
  const getUserInfo = async (userID: string) => {
    const response = await api.listDocuments(COLLECTION_ID_USERS, [
      Query.equal("userID", userID),
    ]);
    return response?.documents[0];
  };

  // TODO: Move this function to a separate file later
  const updateUserInfo = async (userID: string, data: any) => {
    const response = await api.updateDocument(
      COLLECTION_ID_USERS,
      userID,
      data
    );
    return response;
  };

  const { data: userObject } = useQuery("user", () => getUserInfo(userId), {
    // This query will be enabled if "sessionToken" is valid
    enabled: !!sessionToken,
  });

  useEffect(() => {
    console.log(
      "====> INSIDE Settings.screen - userObject: ",
      JSON.stringify(userObject, null, 2)
    );
    // setUserId(userObject?.userID);
    setUserDocumentId(userObject?.$id);
  }, [userObject]);

  const { data: profileImage } = useQuery(
    "profile image",
    () => api.getFilePreview(BUCKET_PROFILE_PIC, userObject?.profileImage),
    {
      // This query will only run if "userObject.profileImage" is valid
      enabled: !!userObject?.profileImage,
    }
  );
  // console.log("====> React Query data: ", profileImage);

  useEffect(() => {
    if (profileImage) {
      setLocalImage(profileImage);
    }
  }, [profileImage]);

  // const queryClient = useQueryClient();
  // const mutation = useMutation(updateUserInfo, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries("profile image");
  //   },
  // });
  // const mutation = useMutation((updatedProfieImageId: string) => {
  //   return updateUserInfo(sessionToken?.userId!, {
  //     profilePicture: updatedProfieImageId,
  //   });
  // });

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
      console.log(
        "======> uploadedImageResult",
        JSON.stringify(uploadedImageResult, null, 2)
      );

      setLatestProfileImageId(uploadedImageResult?.$id); // Capture the uploaded image id

      // TODO: Add this imageID to the user's profileImage (in the User collection)
      // mutation.mutate(uploadedImageResult?.$id);
    }
  };

  useEffect(() => {
    if (latestProfileImageId && userDocumentId) {
      console.log("====> latestProfileImageId: ", latestProfileImageId);
      // mutation.mutate(latestProfileImageId);
      updateUserInfo(userDocumentId, {
        profilePicture: latestProfileImageId,
      })
        .then((result) => {
          console.log("====> uploaded profile pic result: ", result);
        })
        .catch((error) => {
          console.log("====> Update profile picture error: ", error);
        });
    }
  }, [latestProfileImageId, userDocumentId]);

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
