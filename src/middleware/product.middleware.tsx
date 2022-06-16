import FBStoreService from "../service/FBStoreService";
import FBStorageService from "../service/FBStorageService";
import StorageMiddleware from "./storage.middleware";
import CreateProductDTO from "../dto/product-create.body";
import UpdateProductDto from "../dto/product-update.body";
import ProductEntityDTO from "../entity/product.entity";

export default class ProductMiddleware {
    constructor(
        private readonly firebaseStore = FBStoreService,
        private readonly firebaseStorage = FBStorageService,
    ) { }

    async createProduct(userId: string, body: CreateProductDTO) {
        const { title, price, content, images } = body;
        const storeage = new StorageMiddleware();
        const imageUrls = await storeage.uploadMultipleImage(images, 'Product/' + userId)

        const res = await this.firebaseStore.CreateStoreData("Product", {
            title: title,
            price: price,
            content: content,
            images: imageUrls
        });

        if (!res) alert("유저 생성에 실패했습니다.");

        return res;
    }

    async updateProduct(id: string, body: UpdateProductDto) {
        let imageUrls = undefined;
        const { title, price, content, images } = body;
        const storeage = new StorageMiddleware();

        if (images) {
            const isUpload = await Promise.all(images.map(async (image, order) => {
                if (typeof image === "string") {
                    return image
                }
                if (image instanceof File) {
                    return await storeage.uploadSigleImage(image, 'Product/' + id)
                }
            }));

            const product: ProductEntityDTO = await this.firebaseStore.GetOneStoreData("Product", id);
            const isDelete = await Promise.all((product.images.filter((v) => { if (!isUpload.includes(v)) return v })).map(async (item) => {
                await storeage.deleteImage(item);
            }));

            if (isDelete && isUpload) imageUrls = isUpload;
        }


        const res = await this.firebaseStore.CreateStoreData("Product", {
            title: title,
            price: price,
            content: content,
            images: imageUrls
        });

        if (!res) alert("유저 생성에 실패했습니다.");

        return res;
    }
}