import React from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import moment from "moment"
import { moblie } from "../../contants/sizeScreen"

const Container = styled.div``
const Wrapper = styled.div`
  @media screen and (max-width: ${moblie}) {
    display: flex;
    flex-direction: column;
  }
`
const Menu = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  @media screen and (max-width: ${moblie}) {
    order: 2;
  }
`
const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`
const Title = styled.div`
  color: #ed0080;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 10px 0;
`
const Name = styled.div`
  font-weight: 600;
  margin-right: 5px;
`
const Content = styled.div``
const Buy = styled.div`
  background-color: #ed0080;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: ${moblie}) {
    order: 1;
    margin-top: 20px;
  }
`
const Price = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  margin-bottom: 10px;

  @media screen and (max-width: ${moblie}) {
    font-size: 20px;
  }
`
const NamePrice = styled.p`
  margin: 0;
  margin-right: 10px;
`
const Monney = styled.p`
  margin: 0;
  font-size: 2rem;
`
const Button = styled(Link)`
  width: 90%;
  height: 40px;
  border-radius: 8px;
  outline: none;
  border: none;
  background-color: #008fea;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  line-height: 40px;
  text-decoration: none;

  &:hover {
    background-color: #fff;
    color: #008fea;
    cursor: pointer;
  }

  @media screen and (max-width: ${moblie}) {
    width: 95%;
    font-size: 20px;
    height: 60px;
    line-height: 60px;
    letter-spacing: 1px;
  }
`

const BuyNow = () => {
  const tour = useSelector((state) => state.product.products)
  const language = useSelector((state) => state.setLanguage.language)
  const { id } = useParams()
  console.log(tour)
  const handleLogin = () => {
    return
  }

  return (
    <Container>
      <Wrapper>
        <Menu>
          <Item>
            <Title>{tour.tour !== undefined && tour.tour.name}</Title>
          </Item>
          <Item>
            <Name>{language === "VN" ? "Mã tour" : "ID tour"}</Name>
            <Content>{tour._id}</Content>
          </Item>
          <Item>
            <Name>{language === "VN" ? "Thời gian:" : "Time"}</Name>
            <Content>
              {tour.tour !== undefined &&
                moment(tour.timeEnd).date() -
                  moment(tour.timeStart).date()}{" "}
              ngày{" "}
              {tour.tour !== undefined &&
                moment(tour.timeEnd).date() -
                  moment(tour.timeStart).date() -
                  1}{" "}
              đêm
            </Content>
          </Item>
          <Item>
            <Name>{language === "VN" ? "Khởi hành:" : "Time start"}</Name>
            <Content>
              {tour.tour !== undefined &&
                moment(tour.tour.timeStart).utc().format("DD/MM/YYYY")}
            </Content>
          </Item>
          <Item>
            <Name>{language === "VN" ? "Ngày về:" : "Time end"}</Name>
            <Content>
              {tour.tour !== undefined &&
                moment(tour.tour.timeEnd).utc().format("DD/MM/YYYY")}
            </Content>
          </Item>
          <Item>
            <Name>{language === "VN" ? "Vận Chuyển:" : "by"}</Name>
            <Content>Xe du lịch, Máy bay</Content>
          </Item>
          <Item>
            <Name>{language === "VN" ? "Xuất phát:" : "Departure from"}</Name>
            <Content>Từ {tour.departureFrom}</Content>
          </Item>
        </Menu>
        <Buy>
          <Price>
            <NamePrice>{language === "VN" ? "Giá từ:" : "Price"}</NamePrice>
            <Monney>
              {tour.tour !== undefined &&
                tour.tour.price.toLocaleString("vi-VN")}{" "}
              đ
            </Monney>
          </Price>
          <Button to={`/tour/${id}/payment`} onClick={handleLogin}>
            {language === "VN" ? "ĐẶT TOUR NGAY" : "BUY NOW"}
          </Button>
        </Buy>
      </Wrapper>
    </Container>
  )
}

export default BuyNow
