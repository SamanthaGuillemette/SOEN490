/**
 *  Whenever we pick an image from the gallery, the image will be stored in the
 *  device's cache storage. We need to convert that image from path to a binary
 *  format so that we can upload it to Appwrite's storage server (and be able to
 *  view it via Appwrite's Preview).
 */

export function convertImagePathtoBinary(imagePath: string): FormData {
  const fileName = imagePath.split("/").pop();
  let match = /\.(\w+)$/.exec(imagePath);
  let type = match ? `image/${match[1]}` : "image"; // Infer the type of the image

  let formData = new FormData();
  formData.append("fileId", "unique()");
  formData.append("file", {
    uri: imagePath,
    name: fileName,
    type,
  } as any);

  return formData;
}
