import React, { useState } from "react"
import StorageService from "../service/FBStorageService";
import { UploadResult } from "firebase/storage";
import FBStoreService from "../service/FBStoreService";

type Form = {
  title: string
  price: number
  content: string
  images: any[]
}

const Posting = () => {
  const [incompleteImage, setIncompleteImage] = useState<FileList | null>(null);
  const [form, setForm] = useState<Form>({
    title: "",
    price: 0,
    content: "",
    images: []
  });

  const hanlderOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let uploadedImages: any[] = [];

    if (incompleteImage) {
      await Promise.all(
        Array.from(incompleteImage).map(async (file) => {
          const url = await StorageService.UploadSigleImage(file, "products")
          uploadedImages.push(url)
        }));
    }
    const result = await FBStoreService.CreateStoreData("products",
      { ...form, ["images"]: uploadedImages });

      if(result){
        alert("생성 되었습니다.")
      }
  }

  const hanlderOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const hanlderFileOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    setIncompleteImage(files);
  }

  return (
    <>
      <form method="post" onSubmit={hanlderOnSubmit}>
        <input type="text" name="title" placeholder="영양제 이름 입력" onChange={hanlderOnChange} />
        <input type="text" name="price" placeholder="영양제 가격 입력" onChange={hanlderOnChange} />
        <input type="textarea" name="content" placeholder="영양제 설명" onChange={hanlderOnChange} />
        <input type="file" multiple name="images" placeholder="영양제 이미지" onChange={hanlderFileOnChange} />
        <button type="submit" />
      </form>
    </>
  )
}

export default Posting