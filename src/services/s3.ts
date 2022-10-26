import axios from 'axios';
import { apiUrl, s3BucketUrl } from 'lib/constants';
import * as mime from 'react-native-mime-types';
import Recording from 'types/recording';

const getFileType = async (fileUri: string): Promise<string> => {
  return mime.lookup(fileUri) || 'application/octet-stream';
};

const getSignedUrl = async (filename: string, type: string): Promise<string> => {
  const { data } = await axios.get(`${apiUrl}sign-s3?filename=${filename}&type=${type}`);
  return data.url;
};

const uploadFileToS3 = (signedUrl: string, { uri, type, filename }: {uri: string, type: string, filename: string}): Promise<void> => {
  // Uploading to S3 is annoying with fetch/axios – this code is demonstrated to work for arbitrary file types.

  return new Promise((fulfill, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedUrl);
    xhr.onreadystatechange = function xhrrequest(): void {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Successfully uploaded to S3');
          fulfill();
        } else {
          console.log('Error while uploading to S3');
          reject();
        }
      }
    };
    xhr.onerror = (): void => {
      reject();
    };
    xhr.setRequestHeader('Content-Type', type);
    xhr.send({ uri, type, name: filename });
  });
};

/**
 * Given a URI to a file on disk, upload it to S3 and return the URL to the uploaded file.
 *
 * @param fileUri The URI to the file to upload.
 * @returns A Recording object, with a url field and a filename field.
 */
export const uploadFile = async (fileUri: string, userId?: string): Promise<Recording> => {
  let filename = fileUri.split('/').pop();
  const type = await getFileType(fileUri);

  if (userId) {
    filename = `${userId}/${filename}`;
  }

  const signedUrl = await getSignedUrl(filename, type);
  await uploadFileToS3(signedUrl, { uri: fileUri, type, filename });
  return { url: `${s3BucketUrl}/${filename}`, filename };
};
