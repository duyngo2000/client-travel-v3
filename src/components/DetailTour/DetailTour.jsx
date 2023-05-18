import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { selectedProduct } from "../../redux/actions/productActions"
import DetailTourBaner from "./DetailTourBaner"
import styled from "styled-components"
import BuyNow from "./BuyNow"
import ReactHtmlParser from "react-html-parser"
import { moblie } from "../../contants/sizeScreen"
import { apiKey, urlDetailTour } from "../../contants/urlContants"

const Container = styled.div`
  padding: 150px;
  padding-bottom: 20px;

  @media screen and (max-width: ${moblie}) {
    padding: 0;
    margin-top: 60px;
    padding: 0 10px;
  }
`
const Wrapper = styled.div``
const Top = styled.div``
const Name = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;

  @media screen and (max-width: ${moblie}) {
    margin: 0;
  }
`
const Rating = styled.div`
  margin-bottom: 10px;

  @media screen and (max-width: ${moblie}) {
    margin-bottom: 5px;
  }
`
const Center = styled.div`
  display: flex;

  @media screen and (max-width: ${moblie}) {
    display: block;
  }
`
const CenterLeft = styled.div`
  flex: 2;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    background-color: #ccc;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ed0080;
  }

  @media screen and (max-width: ${moblie}) {
    height: 50vh;
  }
`
const Title = styled.h3`
  text-decoration: underline;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
`
const WrapperSchedule = styled.div`
  @media screen and (max-width: ${moblie}) {
    text-align: justify;
    padding-right: 10px;
  }
`
const CenterRight = styled.div`
  flex: 1;
  margin-left: 20px;

  @media screen and (max-width: ${moblie}) {
    margin: 0;
  }
`
const Bottom = styled.div``

const DetailTour = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const tour = useSelector((state) => state.product.products)
  const language = useSelector((state) => state.setLanguage.language)
  console.log("tour", tour)
  const { id } = useParams()
  console.log(id)

  // const idTour = useSelector((state) => state.idProduct.products)
  // console.log(idTour)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchTourDetail = async () => {
      const response = await axios
        .get(`${urlDetailTour}/getbyidtour?_id=${id}`, {
          headers: {
            "api-key": apiKey,
          },
        })
        .catch((err) => console.log("err", err))
      dispatch(selectedProduct(response.data.data))
    }
    fetchTourDetail()
  }, [dispatch, id])

  console.log(tour)
  return (
    <Container>
      <Wrapper>
        <Top>
          <Name>{tour.tour !== undefined && tour.tour.name}</Name>
          <Rating> 4.72/5 trong 9 ĐÁNH GIÁ</Rating>
        </Top>
        <Center>
          <CenterLeft>
            <DetailTourBaner />
            <Title>{language === "VN" ? "Lịch trình" : "Schedule"}</Title>
            <WrapperSchedule>
              {language === "VN"
                ? tour.schedule && ReactHtmlParser(tour.schedule[0])
                : tour.schedule && ReactHtmlParser(tour.schedule[1])}
            </WrapperSchedule>
          </CenterLeft>
          <CenterRight>
            <BuyNow />
          </CenterRight>
        </Center>
        <Bottom></Bottom>
      </Wrapper>
    </Container>
  )
}

export default DetailTour
