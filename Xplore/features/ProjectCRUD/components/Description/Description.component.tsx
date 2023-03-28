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
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
}

export const Description = (props: DescriptionProps) => {
  const [date, setDate] = useState("");
  const [localImage, setLocalImage] = useState<string>();
  const [uploadedImageId, setUploadedImageId] = useState();
  const { setStartDate, setEndDate, setImageURL } = props;

  const { data } = useQuery("projectImage", () =>
    api.getFilePreview(BUCKET_PROJECT_PIC, uploadedImageId || "")
  );
  console.log("====> React Query data: ", data);

  const handleUploadImage = async () => {
    // No permissions request is necessary for launching the image library
    let pickedImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (!pickedImage.cancelled) {
      setLocalImage(pickedImage.uri);

      const uploadedImageResult: any = await uploadImageToServer(
        pickedImage.uri,
        BUCKET_PROJECT_PIC
      );

      setUploadedImageId(uploadedImageResult?.$id);

      if (uploadedImageId) {
        const imagePreview = api.getFilePreview(
          BUCKET_PROJECT_PIC,
          uploadedImageId
        );
        props.setImageURL(imagePreview.toString());
        setLocalImage(imagePreview.toString());

        // if (props.setImageURL) {
        //   // Check if setImageURL is defined before calling it
        //   props.setImageURL(imagePreview.toString());
        // }
      }
    }
  };

  const handleStartDate = (startDate: string) => {
    props.setStartDate(startDate);
  };

  const handleEndDate = (endDate: string) => {
    props.setEndDate(endDate);
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
        <View style={styles.alignDatePicker}>
          <DatePicker
            title="Start Date"
            style={styles.dateAlign}
            setDate={handleStartDate}
          />
          <DatePicker
            title="End Date"
            style={styles.dateAlign}
            setDate={handleEndDate}
          />
        </View>
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
