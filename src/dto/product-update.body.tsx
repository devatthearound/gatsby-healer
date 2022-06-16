
import CreateProductDTO from "./product-create.body";

type UpdateProductDto = {
    title: string
    price: number
    content: string
    images: [File | string]
}
export default UpdateProductDto