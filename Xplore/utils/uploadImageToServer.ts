import { convertImagePathtoBinary } from "./convertImagePathtoBinary";
import { sendXmlHttpRequest } from "./sendXmlHttpRequest";

export const uploadImageToServer = async (
  imagePath: string,
  bucket: string
) => {
  const completedImage = convertImagePathtoBinary(imagePath);

  const uploadedImageResult: any = await sendXmlHttpRequest(
    completedImage,
    bucket
  );

  return uploadedImageResult;
};
