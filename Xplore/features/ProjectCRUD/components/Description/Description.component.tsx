import { TouchableOpacity, View, Image } from "react-native";
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
import { Alert } from "react-native";

interface DescriptionProps {
  setDescription: (desc: string) => void;
  setProjectName: (name: string) => void;
  setImageURL: (url: string) => void;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
}

export const Description = (props: DescriptionProps) => {
  const [localImage, setLocalImage] = useState<string>();
  const [uploadedImageId, setUploadedImageId] = useState();
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const formattedToday = yyyy + "-" + mm + "-" + dd;
  const [sDate, setSDate] = useState("");
  const [eDate, setEDate] = useState("");
  const { setImageURL } = props;

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
      setImageURL(pickedImage.uri);

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
        setLocalImage(imagePreview.toString());
      }
    }
  };

  const handleStartDate = (startDate: string) => {
    if (startDate < formattedToday) {
      Alert.alert(
        "Error",
        "Invalid start date. Must occur today or in the future."
      );
      props.setStartDate("");
      setSDate("");
    } else if (eDate !== "") {
      if (startDate > eDate) {
        Alert.alert("Error", "Invalid start date. Must occur before end date.");
        props.setStartDate("");
        setSDate("");
      } else {
        props.setStartDate(startDate);
        setSDate(startDate);
      }
    } else {
      props.setStartDate(startDate);
      setSDate(startDate);
    }
  };

  const handleEndDate = (endDate: string) => {
    if (endDate <= formattedToday) {
      Alert.alert("Error", "Invalid end date. Must occur after today.");
      props.setEndDate("");
      setEDate("");
    } else if (sDate !== "") {
      if (endDate > sDate) {
        props.setEndDate(endDate);
        setEDate(endDate);
      } else {
        Alert.alert("Error", "Invalid end date. Must occur after start date.");
        props.setEndDate("");
        setEDate("");
      }
    } else {
      props.setEndDate(endDate);
      setEDate(endDate);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.editImageContainer}>
        <TouchableOpacity onPress={() => handleUploadImage()}>
          <ShadowView style={styles.circle}>
            {localImage ? (
              <Image source={{ uri: localImage }} style={styles.alignImage} />
            ) : (
              <Icon name="image" size="x-large" style={styles.alignImage} />
            )}
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
            shouldDisplayDate={sDate !== ""}
          />
          <DatePicker
            title="End Date"
            style={styles.dateAlign}
            setDate={handleEndDate}
            shouldDisplayDate={eDate !== ""}
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
