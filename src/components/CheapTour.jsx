import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { formatDate } from "../contants/formatDate"
import { moblie } from "../contants/sizeScreen"
import { setProductCheap } from "../redux/actions/productActions"
import { url, urlTour } from "../contants/urlContants"
import axios from "axios"

const Container = styled.div`
  padding: 40px;
  background-color: rgba(0, 60, 113, 0.05);

  @media screen and (max-width: ${moblie}) {
    margin: 10px;
  }
`
const Title = styled.h2`
  margin-left: 40px;
  font-weight: 500;
  color: #212121;

  @media screen and (max-width: ${moblie}) {
    margin-left: 0;
  }
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: ${moblie}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    padding: 0;
    grid-gap: 10px;
    height: 100vh;
  }
`
const Place = styled.div`
  border: 1px solid #ccc;
  height: 50vh;
  height: 100%;
  background-color: #fff;

  @media screen and (max-width: ${moblie}) {
    margin: 0;
    height: 100%;

    &:first-child {
      grid-column: 1/2;
      grid-row: 1/3;
    }
    &:nth-child(2) {
      grid-column: 2/3;
      grid-row: 2/4;
    }
    &:nth-child(3) {
      grid-column: 1/2;
      grid-row: 3/5;
    }
    &:nth-child(4) {
      grid-column: 2/3;
      grid-row: 4/6;
    }
    &:nth-child(5) {
      grid-column: 1/2;
      grid-row: 5/7;
    }
  }
`
const WrapperImage = styled.div`
  flex: 1;
  width: 100%;
  height: 30vh;
  /* height: 50%; */
  position: relative;
  cursor: pointer;
  overflow: hidden;
`
const WrapperContent = styled.div`
  padding: 10px;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s;

  :hover {
    transform: scale(1.1);
  }
`
const Content = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Name = styled.h3`
  padding: 0;
  margin: 0;
  margin: 10px 0;
  color: rgb(200, 139, 69);
  color: #f79321;
`
const Item = styled.div``
const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #00abc5;
  font-size: 14px;
`
const Price = styled.h3``
const TimeStart = styled.div``
const TimeEnd = styled.div``
const CheapTour = () => {
  const language = useSelector((state) => state.setLanguage.language)
  const products = useSelector((state) => state.cheapProduct.cheapProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    const ListTour = async () => {
      const response = await axios
        .get(`${urlTour}/getbycheaptour?_limit=8`, {
          headers: {
            "api-key": "duy",
          },
        })
        .catch((err) => console.log("err", err))
      dispatch(setProductCheap(response.data))
    }
    ListTour()
  }, [dispatch])

  return (
    <Container>
      <Title>{language === "VN" ? "Tour giá siêu rẻ" : "Cheap tour"}</Title>
      <Wrapper>
        {products !== undefined &&
          products.map(
            (item, index) =>
              index < 8 && (
                <Place key={item._id}>
                  <WrapperImage>
                    <Link
                      to={`/tour/${item._id}`}
                      // onClick={() => handleClick(item._id)}
                    >
                      <Image src={`${url}${item.image}`} />
                    </Link>
                  </WrapperImage>
                  <WrapperContent>
                    <Content>
                      <Name>{item.name}</Name>
                      <Item>
                        <Time>
                          <TimeStart>
                            Ngày đi: {formatDate(item.timeStart)}
                          </TimeStart>
                          <TimeEnd>Ngày về: {formatDate(item.timeEnd)}</TimeEnd>
                        </Time>
                        <Price
                          style={{
                            textAlign: "right",
                            color: "rgb(200, 139, 69)",
                          }}
                        >
                          {item.price.toLocaleString("vi-VN")}
                          <span style={{ fontSize: "14px" }}>VND</span>
                        </Price>
                      </Item>
                    </Content>
                  </WrapperContent>
                </Place>
              )
          )}
      </Wrapper>
    </Container>
  )
}

export default CheapTour
