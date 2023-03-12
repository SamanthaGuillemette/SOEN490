/**
 *  This is a workaround for the issue with the Appwrite SDK. It uses an "outdated"
 *  method to "talk" to the server.
 *
 *  This was what I tried previously (it results with a blank image on the server)
 *
    // try {
    //   const imgFromUri = await fetch(image.uri);
    //   const imgBlob = await imgFromUri.blob();
    //   const completedImage: File = new File([imgBlob], "avatar3.jpg", {
    //     type: imgBlob.type,
    //     lastModified: Date.now(),
    //   });

    // const uploadedImage = await api.createFile(
    //   BUCKET_PROFILE_PIC,
    //   completedImage
    // );
    //   console.log(JSON.stringify(uploadedImage, null, 2));
    // } catch (error) {
    //   console.log(error);
    //   alert("Upload failed!");
    // }
 */

import { ENDPOINT, PROJECT_ID } from "@env";

export function sendXmlHttpRequest(data: FormData, bucket: string) {
  const xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = () => {
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

    xhr.open("POST", `${ENDPOINT}/storage/buckets/${bucket}/files/`);
    xhr.withCredentials = true;
    xhr.setRequestHeader("X-Appwrite-Project", PROJECT_ID);
    xhr.setRequestHeader("X-Appwrite-Response-Format", "0.15.0");
    xhr.setRequestHeader("x-sdk-version", "appwrite:web:9.0.1");
    xhr.send(data);
  });
}
