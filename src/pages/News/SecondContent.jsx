import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons"
import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import NewContent from "./NewContent"
import { setNews } from "../../redux/actions/newsActions"
import { useDispatch, useSelector } from "react-redux"
import { urlNews } from "../../contants/urlContants"

const Container = styled.div`
  max-width: 1068px;
  margin: 0 auto;
`
const Wrapper = styled.div``
const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #000;
  margin-bottom: 20px;
`
const Title = styled.h2`
  background-color: #000;
  color: #fff;
  padding: 6px 12px;
`
const SeeAll = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 20px;
`
const WrapperContent = styled.div``
const NumberOfPage = styled.div`
  display: flex;
`
const Number = styled.span`
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  cursor: pointer;
`

const SecondContent = () => {
  const [numberOfPage, setNumberOfPage] = useState([1, 2, 3, 4, 5])
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/api/posts1/getdata?_page=${page}`)
  //     .then((res) => {
  //       setData(res.data.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [page])
  const news = useSelector((state) => state.allNews.news)
  const dispatch = useDispatch()

  useEffect(() => {
    const ListNews = async () => {
      const response = await axios
        .get(`${urlNews}/getlist?_page=1`)
        .catch((err) => console.log("err", err))
      dispatch(setNews(response.data.news))
    }
    ListNews()
  }, [dispatch])

  console.log(data)
  const handleChangeNumberPage = (number) => {
    if (number === "left") {
      if (numberOfPage[0] !== 1) {
        setNumberOfPage((prop) => prop.map((item) => item - 1))
      }
    } else {
      setNumberOfPage((prop) => prop.map((item) => item + 1))
    }
  }
  return (
    <Container>
      <Wrapper>
        <WrapperHeader>
          <Title id={`/page/${page}`}>Bài viết mới</Title>
          <SeeAll>Xem tất cả</SeeAll>
        </WrapperHeader>
        <WrapperContent>
          <NewContent data={news} />
        </WrapperContent>
        <NumberOfPage>
          <Number onClick={() => handleChangeNumberPage("left")}>
            <KeyboardArrowLeft />
          </Number>
          {/* {numberOfPage.map((number) => (
            <Number key={number} onClick={() => setPage(number)}>
              <Link
                href={`#/page/${number}`}
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {number}
              </Link>
            </Number>
          ))} */}
          <Number onClick={() => handleChangeNumberPage("right")}>
            <KeyboardArrowRight />
          </Number>
        </NumberOfPage>
      </Wrapper>
    </Container>
  )
}

export default SecondContent
