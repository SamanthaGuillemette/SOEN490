import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Icon, ShadowView } from "../../../../components";
import { EditButton } from "../../components";
import { deviceScreenWidth } from "../../../../constants";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useThemeColor } from "../../../../hooks";
import api from "../../../../services/appwrite/api";
import { BUCKET_PROFILE_PIC, PROJECT_ID } from "@env";

interface SettingsProps {
  navigation: NavigationProp<any>;
}

const Settings = (props: SettingsProps) => {
  const { navigation } = props;
  const statusBarBg = useThemeColor("background"); // Status bar background (only required for Android)
  const [localImage, setLocalImage] = useState<string>();

  function sendXmlHttpRequest(data: any) {
    const xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      xhr.onreadystatechange = (e) => {
        if (xhr.readyState !== 4) {
          return;
        }
        console.log("xhr.status", xhr);

        if (xhr.status === 201) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject("Request Failed");
        }
      };

      xhr.open(
        "POST",
        `https://appwrite.vidyas.ca/v1/storage/buckets/${BUCKET_PROFILE_PIC}/files/`
      );
      xhr.withCredentials = true;
      // xhr.setRequestHeader("content-type", "multipart/form-data");
      xhr.setRequestHeader("X-Appwrite-Project", PROJECT_ID);
      xhr.setRequestHeader("X-Appwrite-Response-Format", "0.15.0");
      xhr.setRequestHeader("x-sdk-version", "appwrite:web:9.0.1");
      xhr.send(data);
    });
  }

  const uploadImageToServer = async (image: ImagePicker.ImageInfo) => {
    // try {
    //   const imgFromUri = await fetch(image.uri);
    //   const imgBlob = await imgFromUri.blob();
    //   const completedImage: File = new File([imgBlob], "avatar3.jpg", {
    //     type: imgBlob.type,
    //     lastModified: Date.now(),
    //   });

    //   const uploadedImage = await api.createFile(
    //     BUCKET_PROFILE_PIC,
    //     "contact.quangtran@gmail.com",
    //     completedImage
    //   );
    //   console.log(JSON.stringify(uploadedImage, null, 2));
    // } catch (error) {
    //   console.log(error);
    //   alert("Upload failed!");
    // }

    const fileName = image.uri.split("/").pop();
    // Infer the type of the image
    let match = /\.(\w+)$/.exec(image.uri);
    let type = match ? `image/${match[1]}` : "image";

    console.log("_--------------------------------------_");
    let formData = new FormData();
    formData.append("fileId", "unique()");
    formData.append("file", {
      uri: image.uri,
      name: fileName,
      type,
    });
    console.log("formData", formData);

    const result = await sendXmlHttpRequest(formData);
    console.log("result", result);

    // TODO: Need to get the Preview URL from the response
    // then set the local image to the preview URL
  };

  const handleUploadImage = async () => {
    // No permissions request is necessary for launching the image library
    let pickedImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    // LOG OUT the image info
    console.log(JSON.stringify(pickedImage, null, 2));

    if (!pickedImage.cancelled) {
      // Set local image so that the picture is displayed right away.
      setLocalImage(pickedImage.uri);
      // Upload the image to the server
      uploadImageToServer(pickedImage);
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
