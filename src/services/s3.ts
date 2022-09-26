import axios from 'axios';
import { apiUrl, s3BucketUrl } from 'lib/constants';

const getFileType = async (fileUri: string): Promise<string> => {
  const resp = await fetch(fileUri);
  return resp.type;
};

const getSignedUrl = async (filename: string, type: string): Promise<string> => {
  const { data } = await axios.get(`${apiUrl}/upload?filename=${filename}&type=${type}`);
  return data.url;
};

const uploadFileToS3 = (signedUrl, { uri, type, filename }: {uri: string, type: string, filename: string}): Promise<void> => {
  return new Promise((fulfill, reject) => {
    // eslint-disable-next-line no-undef
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

export const uploadFile = async (fileUri: string): Promise<string> => {
  const filename = fileUri.split('/').pop();
  const type = await getFileType(fileUri);
  const signedUrl = await getSignedUrl(filename, type);
  await uploadFileToS3(signedUrl, { uri: fileUri, type, filename });
  return `${s3BucketUrl}/${filename}`;
};
