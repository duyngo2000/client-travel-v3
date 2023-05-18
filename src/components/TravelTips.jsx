import { ArrowLeft, ArrowRight } from "@material-ui/icons"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { moblie } from "../contants/sizeScreen"
import { url, urlNews } from "../contants/urlContants"
import axios from "axios"
import { setNewsTips } from "../redux/actions/newsActions"
import { useDispatch, useSelector } from "react-redux"

const Container = styled.div`
  padding: 40px 80px;
  /* margin: 40px 0; */
  background-color: #f2e8e8;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: ${moblie}) {
    margin: 0;
    padding: 10px;
  }
`
const Wrapper = styled.div`
  margin: 0 -10px;
  overflow: hidden;

  @media screen and (max-width: ${moblie}) {
    margin: 0 -5px;
  }
`
const Tips = styled.div`
  width: calc(100% / 3 * ${(prop) => prop.lenghtNews});
  display: flex;

  @media screen and (max-width: ${moblie}) {
    width: calc(100% * 3);
  }
`
const Left = styled(ArrowLeft)`
  width: 40px !important;
  height: 40px !important;
  position: absolute;
  left: 60px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;

  @media screen and (max-width: ${moblie}) {
    left: 15px;
  }
`
const Right = styled(ArrowRight)`
  width: 40px !important;
  height: 40px !important;
  position: absolute;
  right: 60px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;

  @media screen and (max-width: ${moblie}) {
    right: 15px;
  }
`

const Title = styled.h2`
  font-weight: 500;
  color: #212121;
`
const Tip = styled.div`
  flex: 1;
  transform: translateX(
    calc(
      (${({ changeTip }) => changeTip * -100}%) -
        (${({ changeTip }) => changeTip * 20}px)
    )
  );
  transition: all 1s;
  width: calc(100% / 3);
  margin: 0 10px;
  cursor: pointer;

  @media screen and (max-width: ${moblie}) {
    margin: 5px;
    transform: translateX(
      calc(
        (${({ changeTip }) => changeTip * -100}%) -
          (${({ changeTip }) => changeTip * 10}px)
      )
    );
    border: 1px solid #ccc;
    border-radius: 8px;
  }
`
const Image = styled.img`
  width: 100%;
  height: 30vh;
  border-radius: 8px;
  object-fit: cover;
`
const Name = styled.p`
  font-weight: 600;
  color: #302e2e;

  @media screen and (max-width: ${moblie}) {
    margin: 0;
    padding: 0;
    margin: 0 5px;
    text-align: justify;
  }
`

const TravelTips = () => {
  const [changeTip, setChangeTip] = useState(0)
  const news = useSelector((state) => state.newsTips.news)
  // console.log(news)

  const dispatch = useDispatch()
  useEffect(() => {
    const ListTour = async () => {
      const response = await axios
        .get(`${urlNews}/gettraveltips?_limit=10`, {
          headers: {
            "api-key": "duy",
          },
        })
        .catch((err) => console.log("err", err))
      dispatch(setNewsTips(response.data))
    }
    ListTour()
  }, [dispatch])
  const lenghtNews = news.length
  // console.log("lenghtNews", lenghtNews)
  const handleRightTip = () => {
    changeTip >= news.length - 3 ? setChangeTip(0) : setChangeTip(changeTip + 1)
  }

  const handleLeftTip = () => {
    changeTip <= 0 ? setChangeTip(news.length - 3) : setChangeTip(changeTip - 1)
  }

  return (
    <Container>
      <Title>Bí kíp du lịch</Title>
      <Wrapper>
        <Tips lenghtNews={lenghtNews}>
          {news !== undefined &&
            news.map((item) => (
              <Tip key={item._id} changeTip={changeTip}>
                <Link
                  to={`/news/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Image src={url + item.image} />
                  <Name>{item.name}</Name>
                </Link>
              </Tip>
            ))}
        </Tips>
      </Wrapper>
      <Left onClick={handleLeftTip} />
      <Right onClick={handleRightTip} />
    </Container>
  )
}

export default TravelTips
