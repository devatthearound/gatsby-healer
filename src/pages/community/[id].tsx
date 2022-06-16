import React, { useEffect, useState } from "react"
import FBStoreService from "../../service/FBStoreService";
import StorageService from "../../service/FBStorageService";
import styled from "styled-components";

type Form = {
  title: string
  price: number
  content: string
  images: any
}

type Props = {
  id: string
}

const CommunityPage = ({ id }: Props) => {
  const [defalutData, setDefalutData] = useState<any | undefined>();
  const [incompleteImage, setIncompleteImage] = useState<FileList | null>(null);

  useEffect(() => {
    const getData = async () => {
      setDefalutData((await FBStoreService.GetOneStoreData("products", id)).postId);
    }
    getData();
  }, [])

  const hanlderOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let uploadedImages: any[] = [];

    if (incompleteImage) {
      await Promise.all(
        Array.from(incompleteImage).map(async (file) => {
          const url = await StorageService.UploadSigleImage(file, "products")
          uploadedImages.push(url)
        }));
    } else {
      uploadedImages = defalutData.images;
    }

    const result = await FBStoreService.UpdateStoreData(id,
      { ...defalutData, images: uploadedImages }, "products");

    if (result) {
      alert("수정되었습니다.")
    }

  }

  const hanlderOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDefalutData({ ...defalutData, [name]: value })
  }

  const hanlderFileOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    setIncompleteImage(files);
  }

  return (
    <>
      {
        defalutData &&
        <div>
          <p>커뮤니티 글 수정</p>
          <form method="post" onSubmit={hanlderOnSubmit}>
            <input type="text" name="title" placeholder="영양제 이름 입력" defaultValue={defalutData.title} onChange={hanlderOnChange} />
            <input type="text" name="price" placeholder="영양제 가격 입력" defaultValue={defalutData.price} onChange={hanlderOnChange} />
            <input type="textarea" name="content" placeholder="영양제 설명" defaultValue={defalutData.content} onChange={hanlderOnChange} />
            <input type="file" multiple name="images" placeholder="영양제 이미지" onChange={hanlderFileOnChange} />
            <button type="submit" />
          </form>
        </div>
      }

    </>
  )
}

const Wrap = styled.div`
  border-top: 1px solid #dddddd;
`

export default CommunityPage