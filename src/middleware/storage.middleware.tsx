import FBStoreService from "../service/FBStoreService";
import FBStorageService from "../service/FBStorageService";

export default class StorageMiddleware {
    constructor(
        private readonly firebaseStore = FBStoreService,
        private readonly firebaseStorage = FBStorageService
    ) { }

    async uploadSigleImage(image: File, storage: string): Promise<string | undefined> {
        try {
            const imageUrl = await this.firebaseStorage.UploadSigleImage(image, storage)
            return imageUrl;
        } catch (e: unknown) {
            if (e instanceof Error) {
                alert(e.message);
            } else {
                alert("이미지가 업로드되지 않았습니다")
            }

        }
    }

    async uploadMultipleImage(images: File[], storage: string): Promise<string[] | undefined> {
        try {
            let imageUrls: string[] = [];

            Promise.all(images.map(async (image) => {
                imageUrls.push(await this.firebaseStorage.UploadSigleImage(image, storage))
            }))

            return imageUrls;
        } catch (e: unknown) {
            if (e instanceof Error) {
                alert(e.message);
            } else {
                alert("이미지가 업로드되지 않았습니다")
            }

        }
    }

    async deleteImage(imageUrl: string): Promise<string | undefined> {
        try {
            return await this.firebaseStorage.DeleteImage(imageUrl);
        } catch (e) {
            if (e instanceof Error) {
                alert(e.message);
            } else {
                alert("이미지가 삭제되지 않았습니다")
            }
        }
    }
}