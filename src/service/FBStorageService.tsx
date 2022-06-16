import { FirebaseStorage, getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import firebase from './FBConfig';

const firestorage: FirebaseStorage = getStorage(firebase, "gs://test-healer.appspot.com");

const StorageService = {
    UploadSigleImage: async (ImageFile: File, location: string) => {
        try {
            const refStorage = ref(firestorage, location + "/" + ImageFile.name);
            const downloadUrlPromise = await uploadBytes(refStorage, ImageFile).then(async (res) => {
                return await getDownloadURL(refStorage);
            });

            return downloadUrlPromise

        } catch (err: unknown) {
            if (err instanceof Error) {
                console.log(err);
                return {
                    error: err.message,
                };
            } else {
                return { error: "error" }
            }
        }
    },
};

export default StorageService;