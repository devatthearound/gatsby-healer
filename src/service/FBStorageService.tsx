import { FirebaseStorage, getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import firebase from './FBConfig';

const firestorage: FirebaseStorage = getStorage(firebase, "gs://test-healer.appspot.com");

const StorageService = {
    UploadSigleImage: async (ImageFile: File, location: string): Promise<string> => {
        try {
            const refStorage = ref(firestorage, location + "/" + ImageFile.name);
            const downloadUrlPromise = await uploadBytes(refStorage, ImageFile).then(async (res) => {
                return await getDownloadURL(refStorage);
            });

            return downloadUrlPromise

        } catch (err: unknown) {
            if (err instanceof Error) {
                throw new Error(err.message);
            } else {
                throw new Error("알 수 없는 오류입니다.");
            }
        }
    },
    DeleteImage: async (imageUrl: string): Promise<string> => {
        const refStorage = ref(firestorage, imageUrl);
        try {
            await deleteObject(refStorage);
            return "success"
        } catch (err: unknown) {
            if (err instanceof Error) {
                throw new Error(err.message);
            } else {
                throw new Error("알 수 없는 오류입니다.");
            }
        }
    }
};

export default StorageService;