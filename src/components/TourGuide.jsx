import { ArrowLeft, ArrowRight } from "@material-ui/icons"
import React from "react"
import styled from "styled-components"
import bien from "../img/Bien.jpg"

const Container = styled.div`
  padding: 0 80px;
  margin: 40px 0;
  position: relative;
  overflow: hidden;
`
const Wrapper = styled.div`
  margin: 0 -10px;
  /* overflow: hidden; */
`
const Tips = styled.div`
  width: calc((100% / 4) * 5);
  display: flex;
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
`

const Title = styled.h2`
  font-weight: 500;
  color: #212121;
`
const Tip = styled.div`
  flex: 1;
  /* transform: translateX(calc(-100% - 20px)); */
  width: calc(100% / 3);
  margin: 0 10px;
  cursor: pointer;
`
const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`
const Name = styled.p`
  font-weight: 600;
  color: #302e2e;
`
const API = [
  {
    id: 1,
    img: bien,
    title: "Có một đà lạt cảm giác mạng, bạn biết không?",
  },
  {
    id: 2,
    img: bien,
    title: "Sapa thơ mộng bạn có biết?",
  },
  {
    id: 3,
    img: bien,
    title:
      "Nắm ngay trong tay bản đồ các khu vui chơi ở Sài Gòn, hè không đi xa nhưng vẫn chất!",
  },
  {
    id: 4,
    img: bien,
    title: "Lập team truy lùng 5 hòn đảo thiên đường Việt Nam hè này",
  },
  {
    id: 5,
    img: bien,
    title: "Lập team truy lùng 5 hòn đảo thiên đường Việt Nam hè này",
  },
]

const TravelTips = () => {
  return (
    <Container>
      <Title>Bí kíp du lịch</Title>
      <Wrapper>
        <Tips>
          {API.map((item) => (
            <Tip key={item.id}>
              <Image src={item.img} />
              <Name>{item.title}</Name>
            </Tip>
          ))}
        </Tips>
      </Wrapper>
      <Left />
      <Right />
    </Container>
  )
}

export default TravelTips
