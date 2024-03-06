import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    const createUserObj = await createUser();
    const uploadPhotoObj = await uploadPhoto();

    return ({
      photo: uploadPhotoObj,
      user: createUserObj,
    });
  } catch (error) {
    return ({
      photo: null,
      user: null,
    });
  }
}
