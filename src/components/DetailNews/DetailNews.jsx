import axios from "axios"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { selectedNews } from "../../redux/actions/newsActions"
import ReactHtmlParser from "react-html-parser"
import moment from "moment"
import { moblie } from "../../contants/sizeScreen"
import { urlNews } from "../../contants/urlContants"

const Container = styled.div`
  margin: 60px 150px;

  @media screen and (max-width: ${moblie}) {
    margin: 20px 0;
    padding: 0 10px;
  }
`
const Wrapper = styled.div`
  padding: 30px 0;
`
const Top = styled.div`
  width: 100%;
`
const Name = styled.p`
  font-size: 2rem;
  text-align: center;
`
const TopBottom = styled.div`
  text-align: end;
`
const View = styled.p`
  margin: 0;
  padding: 0;

  @media screen and (max-width: ${moblie}) {
    font-size: 16px;
  }
`
const Writer = styled.p`
  margin: 0;
  padding: 0;

  @media screen and (max-width: ${moblie}) {
    font-size: 16px;
  }
`
const CreateAt = styled.p`
  margin: 0;
  padding: 0;

  @media screen and (max-width: ${moblie}) {
    font-size: 16px;
  }
`
const Content = styled.div`
  padding: 20px;
  text-align: justify;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${moblie}) {
    padding: 0;
    font-size: 18px;

    & > figure {
      padding: 0;
      margin: 0;
    }

    & > figure > img {
      width: 100%;
    }
  }
`

const Bottom = styled.div``

const DetailNews = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const news = useSelector((state) => state.news.news)
  console.log(news.view)
  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchNewsDetail = async () => {
      const response = await axios
        .get(urlNews + "/" + id)
        .catch((err) => console.log("err", err))
      dispatch(selectedNews(response.data))
    }
    fetchNewsDetail()
  }, [dispatch, id])

  useEffect(() => {
    axios
      .put(urlNews + "/view/" + id, {
        view: news.view + 1,
      })
      .catch((err) => console.log(err))
  }, [news.view, id])

  return (
    <Container>
      <Wrapper>
        <Top>
          <Name>{news.name}</Name>
          <TopBottom>
            <View>Lượt xem: {news.view}</View>
            <Writer>Tác giả: {news.writer}</Writer>
            <CreateAt>
              Ngày đăng: {moment(news.createdAt).format("DD-MM-YYYY")}
            </CreateAt>
          </TopBottom>
        </Top>
        <Bottom>
          <Content>{ReactHtmlParser(news.content)}</Content>
        </Bottom>
      </Wrapper>
    </Container>
  )
}

export default DetailNews
