import React, { useEffect, useState } from "react"
import styled from "styled-components"
import moment from "moment"
import { useParams } from "react-router-dom"
import axios from "axios"
import { moblie } from "../../contants/sizeScreen"
import { apiKey, url, urlTour } from "../../contants/urlContants"

const Container = styled.div`
  @media screen and (max-width: ${moblie}) {
    padding: 10px;
  }
`
const Wrapper = styled.div`
  padding: 10px;
  padding-left: 0;

  @media screen and (max-width: ${moblie}) {
    padding: 0;
  }
`
const Image = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;

  @media screen and (max-width: ${moblie}) {
    height: 30vh;
  }
`
const Content = styled.div``
const Name = styled.p`
  margin: 0;
  padding: 20px;
  font-size: 1.5rem;
  font-weight: 600;
  border: 1px solid #ccc;
`
const ContentTour = styled.div`
  margin: 0;
`
const Menu = styled.ul`
  margin: 0;
  padding: 0;
  border: 1px solid #ccc;
`
const Item = styled.li`
  list-style: none;
  margin: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  padding-bottom: 5px;
`
const Title1 = styled.p`
  margin: 0;
  font-weight: 600;
  margin-right: 5px;
`
const Title2 = styled.p`
  margin: 0;
`

const TitleTour = () => {
  const [data, setData] = useState({})

  const { id } = useParams()

  useEffect(() => {
    const fetchTourDetail = async () => {
      const response = await axios
        .get(`${urlTour}?_id=${id}`, {
          headers: {
            "api-key": apiKey,
          },
        })
        .catch((err) => console.log("err", err))
      setData(response.data)
    }
    fetchTourDetail()
  }, [id])

  return (
    <Container>
      <Wrapper>
        <Image src={url + data.image} />
        <Content>
          <Name>{data.name}</Name>
          <ContentTour>
            <Menu>
              <Item>
                <Title1>Mã:</Title1>
                <Title2>{data._id}</Title2>
              </Item>
              <Item>
                <Title1>Giá:</Title1>
                <Title2>
                  {data.price !== undefined &&
                    data.price.toLocaleString("vi-VN")}{" "}
                  VND
                </Title2>
              </Item>
              <Item>
                <Title1>Thời gian đi: </Title1>
                <Title2>
                  {moment(data.timeStart).utc().format("DD/MM/YYYY")}
                </Title2>
              </Item>
              <Item>
                <Title1>Thời gian về: </Title1>
                <Title2>
                  {moment(data.timeEnd).utc().format("DD/MM/YYYY")}
                </Title2>
              </Item>
              <Item>
                <Title1>Tổng thời gian: </Title1>
                <Title2>
                  {moment(data.timeEnd).date() - moment(data.timeStart).date()}{" "}
                  ngày{" "}
                  {moment(data.timeEnd).date() -
                    moment(data.timeStart).date() -
                    1}{" "}
                  đêm
                </Title2>
              </Item>
            </Menu>
          </ContentTour>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default TitleTour
