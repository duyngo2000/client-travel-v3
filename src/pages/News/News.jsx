import React, { useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { Visibility } from "@material-ui/icons"
import { useDispatch, useSelector } from "react-redux"
import { setNews, setNewsMany } from "../../redux/actions/newsActions"
import { Link } from "react-router-dom"
import { moblie } from "../../contants/sizeScreen"
import { apiKey, url, urlNews } from "../../contants/urlContants"
import SecondContent from "./SecondContent"
import Notifications from "./Notifications"

const WrapperBanner = styled.div``
const BannerTour = styled.div`
  @media screen and (max-width: ${moblie}) {
    padding: 0 10px;
  }
`
const MenuBanner = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 2fr 1fr 2fr;
  grid-gap: 10px;

  @media screen and (max-width: ${moblie}) {
    display: block;
    grid-gap: 0px;
  }
`
const ItemBanner = styled.li`
  list-style: none;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  &:first-child {
    grid-column: 1/3;
    grid-row: 1/3;
    font-size: 18px;
  }
  &:nth-child(2) {
    grid-column: 3/4;
    grid-row: 1/2;
    font-size: 14px;
  }
  &:nth-child(3) {
    grid-column: 4/5;
    grid-row: 1/2;
    font-size: 14px;
  }
  &:nth-child(4) {
    grid-column: 1/2;
    grid-row: 3/4;
    font-size: 14px;
  }
  &:nth-child(5) {
    grid-column: 2/3;
    grid-row: 3/4;
    font-size: 14px;
  }
  &:nth-child(6) {
    grid-column: 3/5;
    grid-row: 2/4;
    font-size: 18px;
  }

  @media screen and (max-width: ${moblie}) {
    margin-bottom: 15px;
    font-size: 18px !important;
    height: 300px;
  }
`
const LinkBanner = styled(Link)``
const ImageBanner = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`
const NameBanner = styled.p`
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5px 10px;
  text-align: justify;
  color: #fff;
  font-weight: 600;
  background-color: rgb(0 0 0 / 50%);
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 50%);
`
const View = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  min-width: 60px;
  min-height: 30px;
  padding: 5px;
  border-radius: 40%;
  font-size: 14px !important;
  background-color: rgb(0 0 0 / 50%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`

// let timerId
const Container = styled.div`
  max-width: 1068px;
  margin: 0 auto;
  margin-top: 70px;
  display: grid;
  grid-template-columns: 356px 356px 356px;
`
const WrapperTop = styled.div`
  grid-column: 1/4;
  margin-bottom: 50px;
`
const WrapperLeft = styled.div`
  grid-column: 1/3;
  margin-bottom: 50px;
`
const WrapperRight = styled.div`
  grid-column: 3/4;
  margin-left: 20px;
`
const News = () => {
  const newsMany = useSelector((state) => state.newsMany.news)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const dispatch = useDispatch()

  // console.log(news)

  useEffect(() => {
    const ListNews = async () => {
      const response = await axios
        .get(`${urlNews}/getlist?_page=1`, {
          headers: {
            "api-key": apiKey,
          },
        })
        .catch((err) => console.log("err", err))
      dispatch(setNews(response.data.news))
    }
    ListNews()
  }, [dispatch])

  useEffect(() => {
    const ListNews = async () => {
      const response = await axios
        .get(`${urlNews}/getbyview?_limit=6`, {
          headers: {
            "api-key": apiKey,
          },
        })
        .catch((err) => console.log("err", err))
      dispatch(setNewsMany(response.data.news))
    }
    ListNews()
  }, [dispatch])

  const handleUpdateView = async () => {
    await axios.put().catch((err) => console.log(err))
  }

  return (
    <Container>
      <WrapperTop>
        <WrapperBanner>
          <BannerTour>
            <MenuBanner>
              {newsMany.map((item, index) => (
                <ItemBanner key={item._id} onClick={handleUpdateView}>
                  <LinkBanner to={`/news/${item._id}`}>
                    <ImageBanner src={url + item.image} />
                    <NameBanner>{item.name}</NameBanner>
                    <View>
                      <Visibility
                        style={{ fontSize: "14px", marginRight: "5px" }}
                      />
                      {item.view}
                    </View>
                  </LinkBanner>
                </ItemBanner>
              ))}
            </MenuBanner>
          </BannerTour>
        </WrapperBanner>
      </WrapperTop>
      <WrapperLeft>
        <SecondContent />
      </WrapperLeft>
      <WrapperRight>
        <Notifications />
      </WrapperRight>
    </Container>
  )
}

export default News
