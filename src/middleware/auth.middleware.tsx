import FBStoreService from "../service/FBStoreService";
import FBStorageService from "../service/FBStorageService";
import StorageMiddleware from "./storage.middleware";
import UpdateUserDto from "../dto/user-update.body";
import UserEntityDTO from "../entity/user.entity";
import CreateUserDTO from "../dto/user-create.body";

export default class AuthMiddleware {
    constructor(
        private readonly firebaseStore = FBStoreService,
        private readonly firebaseStorage = FBStorageService,
    ) { }

    async createUser(id: string, body: CreateUserDTO) {
        const { name, profile, phoneNumber, area } = body;
        const storeage = new StorageMiddleware();
        const imageUrl = await storeage.uploadSigleImage(profile, 'User')

        const res = await this.firebaseStore.CreateStoreData("usersCollection", {
            id: id,
            phoneNumber: phoneNumber,
            name: name,
            area: area,
            profile: imageUrl
        });

        if (!res) alert("유저 생성에 실패했습니다.");

        return res;
    }



    async updateUser(id: string, body: UpdateUserDto) {
        const { name, profile, phoneNumber, area } = body;
        let imageUrl = undefined;

        if (profile) {
            // 기존 유저 이미지 가져옴
            const userData: UserEntityDTO = await this.firebaseStore.GetOneStoreData("User", id);
            // 기존 이미지 삭제
            const isDelete = await (new StorageMiddleware()).deleteImage(userData.profile);
            // new Image Upload
            const isUpload = await (new StorageMiddleware()).uploadSigleImage(profile, "User")

            if (isDelete && isUpload) imageUrl = isUpload;
        }

        const res = await this.firebaseStore.UpdateStoreData({
            name: name,
            phoneNumber: phoneNumber,
            area: area,
            profile: imageUrl
        }, "User");

        if (!res) alert("유저 생성에 실패했습니다.");

        return res;
    }
}