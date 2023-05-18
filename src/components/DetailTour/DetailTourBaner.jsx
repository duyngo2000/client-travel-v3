import React, { useState } from "react"
import styled from "styled-components"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons"
import { useSelector } from "react-redux"
import { moblie } from "../../contants/sizeScreen"
import { url } from "../../contants/urlContants"

const Container = styled.div`
  margin-bottom: 20px;
`
const WrapperBanner = styled.div`
  width: calc(100% * 4);
  height: 50vh;
  display: flex;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: ${moblie}) {
    height: 100%;
  }
`
const ArrowLeft = styled(KeyboardArrowLeft)`
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
  padding: 10px;
  background-color: #eadddd;
  border-radius: 50%;
  cursor: pointer;
`
const ArrowRight = styled(KeyboardArrowRight)`
  position: absolute;
  top: 50%;
  left: calc(25% - 100px);
  transform: translateY(-50%);
  padding: 10px;
  background-color: #eadddd;
  border-radius: 50%;
  cursor: pointer;
`

const Banner = styled.div`
  position: relative;
  transform: translate(${(prop) => prop.changeBanner * -100}%);
  transition: all 1s;
  width: 400%;
`
const Image = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;

  @media screen and (max-width: ${moblie}) {
    height: 100%;
  }
`

const DetailTourBaner = () => {
  const [changeBanner, setChangeBanner] = useState(0)

  const tour = useSelector((state) => state.product.products)

  console.log(tour)
  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     changeBanner >= 3 ? setChangeBanner(0) : setChangeBanner(changeBanner + 1)
  //   }, 5000)
  //   return () => clearTimeout(timerId)
  // }, [changeBanner])

  const handleRightBanner = () => {
    tour.listImage !== undefined && changeBanner >= tour.listImage.length - 1
      ? setChangeBanner(0)
      : setChangeBanner(changeBanner + 1)
  }

  const handleLeftBanner = () => {
    tour.listImage !== undefined && changeBanner <= 0
      ? setChangeBanner(tour.listImage[0].length - 1)
      : setChangeBanner(changeBanner - 1)
  }
  return (
    <Container>
      <WrapperBanner>
        {tour.listImage !== undefined &&
          tour.listImage.map((item, index) => (
            <Banner key={index} changeBanner={changeBanner}>
              <Image src={url + item} />
              {/* <Title>{item.title}</Title> */}
            </Banner>
          ))}
        <ArrowLeft onClick={handleLeftBanner} />
        <ArrowRight onClick={handleRightBanner} />
      </WrapperBanner>
    </Container>
  )
}

export default DetailTourBaner
