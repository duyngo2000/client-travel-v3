import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import moment from "moment"
import {
  AccessTime,
  ArrowDropDown,
  EventAvailable,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@material-ui/icons"
import { useDispatch, useSelector } from "react-redux"
import { setProduct } from "../../redux/actions/productActions"
import { Link } from "react-router-dom"
import { magrin, moblie, padding } from "../../contants/sizeScreen"
import { url, urlTour } from "../../contants/urlContants"
import Filter from "./Filter"

const fs16px = {
  fontSize: "16px",
}
const fs14px = {
  fontSize: "14px",
}
const Container = styled.div`
  padding-top: 60px;
  background-color: rgba(0, 60, 113, 0.05);
`

const Wrapper = styled.div``
const WrapperBannerAndFilter = styled.div`
  margin: ${magrin};
`
const WrapperBanner = styled.div`
  /* padding: ${padding}; */
  height: 70vh;
  display: flex;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: ${moblie}) {
    height: 40vh;
  }
`
const ArrowLeft = styled(KeyboardArrowLeft)`
  position: absolute;
  top: 50%;
  left: 100px;
  transform: translateY(-50%);
  padding: 10px;
  background-color: #eadddd;
  border-radius: 50%;
  cursor: pointer;

  @media screen and (max-width: ${moblie}) {
    margin: 0;
    padding: 0;
    left: 10px;
  }
`
const ArrowRight = styled(KeyboardArrowRight)`
  position: absolute;
  top: 50%;
  right: 100px;
  transform: translateY(-50%);
  padding: 10px;
  background-color: #eadddd;
  border-radius: 50%;
  cursor: pointer;

  @media screen and (max-width: ${moblie}) {
    margin: 0;
    padding: 0;
    right: 10px;
  }
`

const Banner = styled.div`
  position: relative;
  transform: translate(${(prop) => prop.changeBanner * -100}vw);
  transition: all 1s;
`
const Image = styled.img`
  width: 100vw;
  height: 70vh;

  @media screen and (max-width: ${moblie}) {
    height: 40vh;
  }
`
const Title = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.2rem;
  text-align: center;

  @media screen and (max-width: ${moblie}) {
    margin: 0;
    padding: 0;
  }
`
const WrapperTours = styled.div`
  margin: ${magrin};
  padding: ${padding};
  @media screen and (max-width: ${moblie}) {
    margin: 0;
    padding: 0;
    padding: 20px 0;
  }
`
const Tours = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: ${moblie}) {
    display: block;
    padding: 0 10px;
  }
`
const ItemTour = styled.div`
  width: 100%;
  height: 400px;
  background-color: #dfd9d9;
  border-radius: 8px;

  @media screen and (max-width: ${moblie}) {
    margin-top: 10px;
  }
`
const Page = styled.div`
  margin-top: 20px;
  display: ${(prop) => (prop.page <= 0 ? "none" : "flex")};
  align-items: center;
  justify-content: center;
`
const IndexPage = styled.button`
  border: 1px solid #c37676;
  background-color: #fff;
  /* color: #fff; */
  font-size: 16px;
  border-radius: 8px;
  padding: 8px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
    border: 1px solid #fff;
    background-color: #c37676;
    color: #fff;
    transition: all 0.3s ease-out;
  }
`

const Top = styled.div`
  position: relative;
  background-color: antiquewhite;
  height: 200px;
  height: 50%;
  border-radius: 8px;
  overflow: hidden;
`
const ImageTour = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media screen and (max-width: ${moblie}) {
    width: 100%;
  }
`
const CountDown = styled.p`
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(50% - 20px);
  height: 24px;
  display: flex;
  align-items: center;
  padding: 6px 10px;
  background-color: rgba(255, 255, 255, 0.5);
`
const PlaceStart = styled.p`
  margin: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  width: calc(50% - 20px);
  height: 24px;
  padding: 6px 10px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
`
const Center = styled.div`
  height: calc(25% - 20px);
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: justify;
  font-size: 14px;
`
const PlaceGo = styled(Link)`
  width: 100%;
  text-decoration: none;
  font-weight: 600;
  font-size: 17px;
  &:hover {
    cursor: pointer;
    color: #c31ea7;
  }
`
const Bottom = styled.div`
  height: calc(25% - 20px - 20px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;
  font-size: 14px;
`
const Time = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
`
const TimeStart = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
`

const Price = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: red;
  font-weight: 600;
`

const Tour = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const products = useSelector((state) => state.allProducts.products)
  const language = useSelector((state) => state.setLanguage.language)
  const [page, setPage] = useState(0)
  const [indexPage, setIndexPage] = useState(1)
  const [limit, setLimit] = useState(20)

  const dispatch = useDispatch()
  useEffect(() => {
    const ListTour = async () => {
      const response = await axios
        .get(`${urlTour}/getlist?_page=${indexPage}`, {
          headers: {
            "api-key": "duy",
          },
        })
        .catch((err) => console.log("err", err))
      dispatch(setProduct(response.data.tour))
      setPage(response.data.total_index)
      setLimit(response.data.limit)
    }

    ListTour()
  }, [dispatch, indexPage])
  console.log("products", products)
  // console.log("page", page)
  // console.log("indexPage", indexPage)
  const [changeBanner, setChangeBanner] = useState(0)

  useEffect(() => {
    const timerId = setInterval(() => {
      changeBanner >= 3 ? setChangeBanner(0) : setChangeBanner(changeBanner + 1)
    }, 5000)
    return () => clearTimeout(timerId)
  }, [changeBanner])

  const handleRightBanner = () => {
    changeBanner >= 3 ? setChangeBanner(0) : setChangeBanner(changeBanner + 1)
  }

  const handleLeftBanner = () => {
    changeBanner <= 0 ? setChangeBanner(3) : setChangeBanner(changeBanner - 1)
  }
  const handleClickPage = () => {
    setIndexPage(indexPage + 1)
    const ListTour = async () => {
      const response = await axios
        .get(`${urlTour}?page=${indexPage}`, {
          headers: {
            "api-key": "duy",
          },
        })
        .catch((err) => console.log("err", err))
      dispatch(setProduct([...products, ...response.data.tour]))
      setPage(response.data.total_index)
      setLimit(response.data.limit)
    }

    ListTour()
  }
  return (
    <Container>
      <Wrapper>
        <WrapperBannerAndFilter>
          <WrapperBanner>
            {products !== undefined &&
              products.map((item, index) => (
                <Banner key={index} changeBanner={changeBanner}>
                  <Image src={`${url}${item.image}`} />
                  <Title>{item.title}</Title>
                </Banner>
              ))}
            <ArrowLeft onClick={handleLeftBanner} />
            <ArrowRight onClick={handleRightBanner} />
          </WrapperBanner>
          <Filter />
        </WrapperBannerAndFilter>

        <WrapperTours>
          <Tours>
            {products !== undefined &&
              products.map((data) => (
                <ItemTour key={data._id}>
                  <Top>
                    <Link to={`/tour/${data._id}`}>
                      <ImageTour src={url + data.image} />
                    </Link>
                    <CountDown>
                      <AccessTime style={fs16px} />
                      Còn 02 ngày 01:20:18
                    </CountDown>
                    <PlaceStart>
                      {language === "VN" ? "Khởi Hành Từ" : "Departure from"}{" "}
                      {data.departureFrom}
                    </PlaceStart>
                  </Top>
                  <Center>
                    <PlaceGo to={`/tour/${data._id}`}>{data.name}</PlaceGo>
                  </Center>
                  <Bottom>
                    <Time>
                      <AccessTime style={fs14px} />{" "}
                      {language === "VN" ? "Lịch trình:" : "Schedule:"}{" "}
                      {moment(data.timeEnd).date() -
                        moment(data.timeStart).date()}{" "}
                      ngày{" "}
                      {moment(data.timeEnd).date() -
                        moment(data.timeStart).date() -
                        1}{" "}
                      đêm
                    </Time>
                    <TimeStart>
                      <EventAvailable style={fs14px} />
                      {language === "VN" ? "Khởi hành:" : "Start: "}{" "}
                      {moment(data.timeStart).utc().format("DD/MM/YYYY")}
                    </TimeStart>
                    <Price>
                      {language === "VN"
                        ? data.price.toLocaleString("vi-VN")
                        : (data.price / 23000)
                            .toFixed(2)
                            .toLocaleString("en-US") + "$"}
                      <span style={{ fontSize: "14px", marginTop: "5px" }}>
                        {" "}
                        VND
                      </span>
                    </Price>
                  </Bottom>
                </ItemTour>
              ))}
          </Tours>
          <Page page={page - indexPage * limit}>
            <IndexPage onClick={handleClickPage}>
              Xem thêm 20 tour khác
              {/* Xem thêm {page - indexPage * limit} tour khác  */}
              <ArrowDropDown />
            </IndexPage>
          </Page>
        </WrapperTours>
      </Wrapper>
    </Container>
  )
}

export default Tour
