import FBStoreService from "../service/FBStoreService";
import FBStorageService from "../service/FBStorageService";
import StorageMiddleware from "./storage.middleware";

export default class ProductMiddleware {
    constructor(
        private readonly firebaseStore = FBStoreService,
        private readonly firebaseStorage = FBStorageService,
    ) { }

    async createProduct(userId: string, phoneNumber: string, name: string, profile: File) {
        const storeage = new StorageMiddleware();
        const imageUrl = await storeage.uploadSigleImage(profile, 'User')

        const res = await this.firebaseStore.CreateStoreData("usersCollection", {
            phoneNumber: phoneNumber,
            userId: userId,
            name: name,
            profile: imageUrl ?? imageUrl
        });

        if (!res) alert("유저 생성에 실패했습니다.");

        return res;
    }
}