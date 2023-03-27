import { TouchableOpacity, View } from "react-native";
import styles from "./Description.styles";
import {
  DatePicker,
  Icon,
  InputField,
  ShadowView,
} from "../../../../components";
import { useState } from "react";
import { uploadImageToServer } from "../../../../utils";
import * as ImagePicker from "expo-image-picker";
import api from "../../../../services/appwrite/api";
import { BUCKET_PROJECT_PIC } from "@env";
import { useQuery } from "react-query";

interface DescriptionProps {
  setDescription: (desc: string) => void;
  setProjectName: (name: string) => void;
  setImageURL: (url: string) => void;
}

export const Description = (props: DescriptionProps) => {
  const [date, setDate] = useState("");
  const [localImage, setLocalImage] = useState<string>();
  const [uploadedImageId, setUploadedImageId] = useState();

  const { data } = useQuery("projectImage", () =>
    api.getFilePreview(BUCKET_PROJECT_PIC, uploadedImageId || "")
  );
  console.log("====> React Query data: ", data);

  const handleUploadImage = async () => {
    try {
      // No permissions request is necessary for launching the image library
      let pickedImage = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 3],
        quality: 1,
      });

      if (!pickedImage.cancelled) {
        setLocalImage(pickedImage.uri);

        const uploadedImageResult = await uploadImageToServer(
          pickedImage.uri,
          BUCKET_PROJECT_PIC
        );

        const imageURL = uploadedImageResult?.url; // Assuming the URL is returned by the uploadImageToServer function

        setUploadedImageId(uploadedImageResult?.$id);
        props.setImageURL(imageURL); // Pass the imageURL to the setImageURL function
      }
    } catch (error) {
      console.error("Error uploading image: ", error);
      // Handle the error here, e.g. show an error message to the user.
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.editImageContainer}>
        <TouchableOpacity onPress={() => handleUploadImage()}>
          <ShadowView style={styles.circle}>
            <Icon name="image" size="x-large" style={styles.alignImage} />
          </ShadowView>
        </TouchableOpacity>
      </View>
      <View>
        <View style={[styles.containerTextInputName, styles.alignProjectName]}>
          <InputField
            placeHolder="Project name"
            styleText={styles.styleText}
            onChangeText={(projName) => props.setProjectName(projName)}
          />
        </View>
        <DatePicker title="Start" style={styles.dateAlign} setDate={setDate} />
        <View style={styles.containerTextInputDesc}>
          <InputField
            placeHolder="Project description"
            styleText={styles.styleText}
            onChangeText={(desc) => props.setDescription(desc)}
          />
        </View>
      </View>
    </View>
  );
};
