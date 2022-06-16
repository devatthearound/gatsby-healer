import FBStoreService from "../service/FBStoreService";

export default class AuthMiddleware {
    constructor(
        private readonly firebaseStore = FBStoreService
    ) { }

    async createUser(userId: string, phoneNumber: string, name: string) {
        const res = await this.firebaseStore.CreateStoreData("usersCollection", {
            phoneNumber: phoneNumber,
            userId: userId,
            name: name,
        });

        if (!res) alert("유저 생성에 실패했습니다.");

        return res;
    }
}