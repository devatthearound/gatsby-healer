import React, { useEffect, useState } from "react"
import FBStoreService from "../../service/FBStoreService";
import styled from "styled-components";
import { Link } from "gatsby";

type Form = {
  title: string
  price: number
  content: string
  images: any
}

const CommunityPage = () => {
  const [data, setData] = useState<any[] | undefined>();

  useEffect(() => {
    const getData = async () => {
      setData((await FBStoreService.GetAllStoreData("products")).postId);
    }

    getData();
  }, [])

  const onClickUpdate = () => {

  }

  const onClickDelete = async (id: string) => {
    const result = await FBStoreService.RemoveStoreData(id, "products")
    if (result) alert("삭제되었습니다. 새로고침해주세요")
  }

  return (
    <>
      <p>커뮤니티</p>
      {
        data?.map((item, key) => (
          <Wrap key={key}>
            <p>제목: {item.title}</p>
            <p>가격: {item.price}</p>
            <p>설명: {item.content}</p>
            <p>이미지</p>
            {
              item.images?.map((url: string, key: number) => (
                <img src={url} key={key} width={100} height={100} />
              ))
            }
            <Link to={"/community/" + item.id} >수정하기</Link>
            <button onClick={() => onClickDelete(item.id)}>삭제하기</button>
          </Wrap>
        ))
      }
    </>
  )
}

const Wrap = styled.div`
  border-top: 1px solid #dddddd;
`

export default CommunityPage