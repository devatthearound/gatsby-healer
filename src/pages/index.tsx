import styled from "styled-components"
import React from "react";
import Layout from "../components/Layout";

const HomePage = () => {
    return (
      <Layout>
        <Wraper>
          <Container>
            <Selction1>
              <h2>어떤 서비스가 필요하신가요?</h2>
              <BoxWrap>
                <ItemBox>
                  <div>
                    <h3>의약품 구매</h3>
                    <p>구매가능한 의약품 보기</p>
                  </div>
                  <div> </div>
                </ItemBox>
                <ItemBox>
                  <div>
                    <h3>의약품 판매</h3>
                    <p>판매할 의약품 등록하기</p>
                  </div>
                  <div> </div>
                </ItemBox>
              </BoxWrap>
            </Selction1>
            <Selction2>
              <p>그냥 가볍게 둘러보러 왔어요!</p>
            </Selction2>
          </Container>
        </Wraper>
      </Layout>
    )
}

export default HomePage;


const Wraper = styled.div`
    display: flex;
    width:100vw;
    height:100vh;
    background: rgba(23,43,77,1);
    font-size: 14px;
`

const Container = styled.div`
    position: relative;
    height: 100%;
    margin: auto;
`

const Selction1 = styled.div`
    color: rgba(255,255,255,1);
    font-weight: Medium;
    font-size: 24px;
    text-align: left;
    padding: 0;
`
const Selction2 = styled.div`
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 0;
      margin-bottom:50px;
`

//   .healer - container - footer - content {
//   color: rgba(255, 244, 238, 1);
//   font - weight: Medium;
//   font - size: 14px;
// }

const BoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 13px;
  width: 160px;
  height: 141px;
  background: rgba(255, 255, 255, 1);
  border-radius: 12px;
`

//   .healer - box - top - main - title {
//   padding: 0;
//   margin: 0;
//   color: rgba(9, 30, 66, 1);
//   font - weight: Medium;
//   font - size: 20px;
//   opacity: 1;
//   text - align: left;
//   line - height: 1.5;
// }
const ItemBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 40px;
  `