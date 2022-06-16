import FBStoreService from "../service/FBStoreService";
import FBStorageService from "../service/FBStorageService";
import StorageMiddleware from "./storage.middleware";
import UpdateUserDto from "../dto/user-update.body";
import { useState } from "react";
import UserEntityDTO from "../entity/user.entity";

export default class AuthMiddleware {
    constructor(
        private readonly firebaseStore = FBStoreService,
        private readonly firebaseStorage = FBStorageService,
    ) { }

    async createUser(userId: string, phoneNumber: string, name: string, profile: File) {
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



    async updateUser(id: string, body: UpdateUserDto) {
        const [reqBody, setReqBody] = useState<UpdateUserDto>(body);
        if (body.profile instanceof File) {
            // 기존 유저 이미지 가져옴
            const userData: UserEntityDTO = await this.firebaseStore.GetOneStoreData("usersCollection", id);
            // 기존 이미지 삭제
            const res = await (new StorageMiddleware()).deleteImage(userData.profile);
            const imageUrl = await (new StorageMiddleware()).uploadSigleImage(body.profile, "User");

            if (!imageUrl) alert("이미지 업로드에 실패했습니다.");
            else setReqBody({ ...reqBody, "profile": imageUrl });
        }

        const res = await this.firebaseStore.UpdateStoreData(body, "usersCollection");

        if (!res) alert("유저 생성에 실패했습니다.");

        return res;
    }
}